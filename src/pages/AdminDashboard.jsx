import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import {
  FaFileAlt,
  FaUserCircle,
  FaSignOutAlt,
  FaEdit,
  FaCheck,
  FaTimes,
  FaTrash,
  FaEnvelope,
} from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();
  const [adminData, setAdminData] = useState({
    applicants: [],
    contactMessages: [],
  });
  const [eligibleUsers, setEligibleUsers] = useState([]);
  const [updateEligibility, setUpdateEligibility] = useState({
    userId: "",
    status: "",
  });
  const [updateApproval, setUpdateApproval] = useState({
    userId: "",
    status: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { replace: true });
    } else if (!loading && user) {
      const checkAdminAccess = async () => {
        console.log("Logged-in user UID:", user.uid);
        try {
          const adminDocRef = doc(db, "admins", "adminList");
          const adminDocSnap = await getDoc(adminDocRef);

          if (!adminDocSnap.exists()) {
            console.log(
              "Admin document does not exist - redirecting to /dashboard"
            );
            navigate("/dashboard", { replace: true });
            return;
          }

          const adminData = adminDocSnap.data();
          const adminUserIds = adminData.userIds || [];
          console.log("Admin userIds:", adminUserIds);

          if (!adminUserIds.includes(user.uid)) {
            console.log("Authorization failed - redirecting to /dashboard");
            navigate("/dashboard", { replace: true });
            return;
          }

          const [applicantsSnap, contactSnap, eligibilitySnap] =
            await Promise.all([
              getDocs(collection(db, "applicants")),
              getDocs(collection(db, "contact")),
              getDocs(collection(db, "eligibility")),
            ]);

          const applicantsData = applicantsSnap.docs.map((doc) => ({
            id: doc.id,
            userId: doc.data().userId || doc.id,
            status: doc.data().status || "Pending",
            paymentStatus: doc.data().paymentStatus || "Unpaid",
            additionalInfo: doc.data().additionalInfo || null,
          }));

          const contactData = contactSnap.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name || "Anonymous",
            email: doc.data().email || "N/A",
            message: doc.data().message || "No message provided",
            submittedAt: doc.data().submittedAt
              ? new Date(doc.data().submittedAt).toISOString()
              : "N/A",
          }));

          const eligibilityData = eligibilitySnap.docs.map((doc) => ({
            id: doc.id,
            fullName: doc.data().fullName || "N/A",
            email: doc.data().email || "N/A",
            eligibility: doc.data().eligibility || false,
            approved: doc.data().approved || false,
          }));

          setAdminData({
            applicants: applicantsData,
            contactMessages: contactData,
          });
          setEligibleUsers(eligibilityData);
          console.log("Admin data loaded successfully");
        } catch (error) {
          console.error(
            "Error checking admin access or fetching data:",
            error.message
          );
          toast.error("Failed to load admin data. Please try again later.");
          navigate("/dashboard", { replace: true });
        }
      };
      checkAdminAccess();
    }
  }, [user, loading, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleUpdateEligibility = async (e) => {
    e.preventDefault();
    if (!updateEligibility.userId || !updateEligibility.status) {
      toast.error("Please select a status to update.");
      return;
    }

    setIsUpdating(true);
    try {
      const eligibilityRef = doc(db, "eligibility", updateEligibility.userId);
      await updateDoc(eligibilityRef, {
        eligibility: updateEligibility.status === "Eligible",
        lastUpdated: new Date().toISOString(),
      });

      setEligibleUsers((prev) =>
        prev.map((user) =>
          user.id === updateEligibility.userId
            ? { ...user, eligibility: updateEligibility.status === "Eligible" }
            : user
        )
      );

      toast.success("Eligibility status updated successfully!");
    } catch (error) {
      console.error("Error updating eligibility:", error.message);
      toast.error("Failed to update eligibility. Please try again.");
    } finally {
      setIsUpdating(false);
      setUpdateEligibility({ userId: "", status: "" });
    }
  };

  const handleUpdateApproval = async (e) => {
    e.preventDefault();
    if (!updateApproval.userId || !updateApproval.status) {
      toast.error("Please select a status to update.");
      return;
    }

    setIsUpdating(true);
    try {
      const eligibilityRef = doc(db, "eligibility", updateApproval.userId);
      await updateDoc(eligibilityRef, {
        approved: updateApproval.status === "Approved",
        lastUpdated: new Date().toISOString(),
      });

      setEligibleUsers((prev) =>
        prev.map((user) =>
          user.id === updateApproval.userId
            ? { ...user, approved: updateApproval.status === "Approved" }
            : user
        )
      );

      toast.success("Approval status updated successfully!");
    } catch (error) {
      console.error("Error updating approval:", error.message);
      toast.error("Failed to update approval. Please try again.");
    } finally {
      setIsUpdating(false);
      setUpdateApproval({ userId: "", status: "" });
    }
  };

  const handleDelete = async (collectionName, docId) => {
    if (
      !window.confirm(
        `Are you sure you want to delete this ${collectionName} record?`
      )
    ) {
      return;
    }

    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, collectionName, docId));

      setAdminData((prev) => ({
        ...prev,
        [collectionName === "contact" ? "contactMessages" : collectionName]:
          prev[
            collectionName === "contact" ? "contactMessages" : collectionName
          ].filter((item) => item.id !== docId),
      }));

      toast.success(`${collectionName} record deleted successfully!`);
    } catch (error) {
      console.error(`Error deleting ${collectionName} record:`, error.message);
      toast.error(
        `Failed to delete ${collectionName} record. Please try again.`
      );
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-emerald-50 text-gray-700">
      <section className="relative w-full h-[60vh] overflow-hidden">
        <LazyLoadImage
          src="/bg3.jpg"
          alt="SouthPark University admin overview"
          effect="opacity"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-5000"
          wrapperClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="absolute bottom-4 px-4 lg:px-12 left-0 lg:left-4 text-white text-lg flex items-center space-x-2">
          <Link
            to="/"
            className="hover:text-emerald-400 transition duration-300"
          >
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-400">Admin Dashboard</span>
        </div>
      </section>
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-60vh)]">
        <aside className="w-full md:w-64 bg-emerald-800 text-white flex flex-col px-2 py-8">
          <div className="flex flex-col items-center mb-8">
            <LazyLoadImage
              src={user?.photoURL || "/default-profile-pic.jpeg"}
              alt="Admin profile"
              effect="opacity"
              className="w-16 h-16 rounded-full border-2 border-emerald-400"
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold">Admin</h2>
              <p className="text-sm opacity-80">{user?.email}</p>
              <p className="text-xs mt-1 bg-emerald-600 px-2 py-1 rounded-full">
                Admin
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center space-x-2 py-2 px-4 rounded-lg hover:bg-emerald-700 transition duration-300 mt-auto mx-2"
          >
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        </aside>
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto pb-20">
          <h1 className="text-3xl sm:text-4xl text-emerald-700 mb-8">
            Admin Dashboard
          </h1>
          <div className="space-y-8">
            <div className=" flex flex-col gap-8">
              {" "}
              <Link
                to="eligibility-applicants"
                className="inline-flex items-center space-x-2 bg-emerald-600 text-white py-3 px-8 fontMuch text-lg hover:bg-emerald-700 transition duration-300 shadow-lg hover:scale-105 transform"
              >
                <span>Eligibility Applicants Data</span>
              </Link>
              <Link
                to="verification-applicants"
                className="inline-flex items-center space-x-2 bg-emerald-600 text-white py-3 px-8 fontMuch text-lg hover:bg-emerald-700 transition duration-300 shadow-lg hover:scale-105 transform"
              >
                <span>Documents Verification Applicants Data</span>
              </Link>
              <Link
                to="newsletter"
                className="inline-flex items-center space-x-2 bg-emerald-600 text-white py-3 px-8 fontMuch text-lg hover:bg-emerald-700 transition duration-300 shadow-lg hover:scale-105 transform"
              >
                <span>NewsLetter Subscribers Emails</span>
              </Link>
            </div>
            {/* Eligibility Management */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-6 flex items-center">
                <FaFileAlt className="mr-3" /> Eligibility Management (
                {eligibleUsers.length})
              </h2>
              {eligibleUsers.length === 0 ? (
                <p className="text-gray-500">No eligible users found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {eligibleUsers.map((user) => (
                    <div
                      key={user.id}
                      className="border border-gray-200 rounded-lg p-2 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">
                            {user.fullName || "N/A"}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {user.email || "No email"}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            user.eligibility
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.eligibility ? "Eligible" : "Not Eligible"}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <form
                          onSubmit={handleUpdateEligibility}
                          className="flex items-end gap-2 flex-grow"
                        >
                          <div className="flex-grow">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Update Status
                            </label>
                            <select
                              value={
                                updateEligibility.userId === user.id
                                  ? updateEligibility.status
                                  : ""
                              }
                              onChange={(e) =>
                                setUpdateEligibility({
                                  userId: user.id,
                                  status: e.target.value,
                                })
                              }
                              className="w-full p-2 border rounded focus:ring-emerald-500 focus:border-emerald-500"
                              required
                            >
                              <option value="">Select status</option>
                              <option value="Eligible">Eligible</option>
                              <option value="Not Eligible">Not Eligible</option>
                            </select>
                          </div>
                          <button
                            type="submit"
                            disabled={
                              isUpdating ||
                              !updateEligibility.status ||
                              updateEligibility.userId !== user.id
                            }
                            className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded disabled:opacity-50 flex items-center"
                          >
                            <FaEdit className="mr-2" />
                            {isUpdating ? "Updating..." : "Update"}
                          </button>
                        </form>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Applicants Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-6 flex items-center">
                <FaFileAlt className="mr-3" /> Applicants (
                {adminData.applicants.length})
              </h2>
              {adminData.applicants.length === 0 ? (
                <p className="text-gray-500">No applicants found.</p>
              ) : (
                <div className="space-y-4">
                  {adminData.applicants.map((applicant) => {
                    const relatedUser = eligibleUsers.find(
                      (u) => u.id === (applicant.userId || applicant.id)
                    );
                    return (
                      <div
                        key={applicant.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">
                              {relatedUser?.fullName || "Applicant"}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {relatedUser?.email || "No email"}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                applicant.status === "Approved"
                                  ? "bg-green-100 text-green-800"
                                  : applicant.status === "Rejected"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {applicant.status || "Pending"}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                applicant.paymentStatus === "Paid"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {applicant.paymentStatus || "Unpaid"}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                relatedUser?.approved
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {relatedUser?.approved
                                ? "Approved"
                                : "Not Approved"}
                            </span>
                            <button
                              onClick={() =>
                                handleDelete("applicants", applicant.id)
                              }
                              disabled={isDeleting}
                              className="text-red-600 hover:text-red-800 flex items-center mt-2"
                            >
                              <FaTrash className="mr-1" /> Delete
                            </button>
                          </div>
                        </div>
                        {applicant.additionalInfo && (
                          <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
                            <h4 className="font-medium mb-1">
                              Additional Information:
                            </h4>
                            <p>{applicant.additionalInfo}</p>
                          </div>
                        )}
                        <div className="mt-4 flex items-center gap-2">
                          <form
                            onSubmit={handleUpdateApproval}
                            className="flex items-end gap-2 flex-grow"
                          >
                            <div className="flex-grow">
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Update Approval
                              </label>
                              <select
                                value={
                                  updateApproval.userId ===
                                  (applicant.userId || applicant.id)
                                    ? updateApproval.status
                                    : ""
                                }
                                onChange={(e) =>
                                  setUpdateApproval({
                                    userId: applicant.userId || applicant.id,
                                    status: e.target.value,
                                  })
                                }
                                className="w-full p-2 border rounded focus:ring-emerald-500 focus:border-emerald-500"
                                required
                              >
                                <option value="">Select status</option>
                                <option value="Approved">Approved</option>
                                <option value="Not Approved">
                                  Not Approved
                                </option>
                              </select>
                            </div>
                            <button
                              type="submit"
                              disabled={
                                isUpdating ||
                                !updateApproval.status ||
                                updateApproval.userId !==
                                  (applicant.userId || applicant.id)
                              }
                              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded disabled:opacity-50 flex items-center"
                            >
                              <FaEdit className="mr-2" />
                              {isUpdating ? "Updating..." : "Update"}
                            </button>
                          </form>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Contact Messages Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-6 flex items-center">
                <FaEnvelope className="mr-3" /> Contact Messages (
                {adminData.contactMessages.length})
              </h2>
              {adminData.contactMessages.length === 0 ? (
                <p className="text-gray-500">No contact messages found.</p>
              ) : (
                <div className="space-y-4">
                  {adminData.contactMessages.map((message) => (
                    <div
                      key={message.id}
                      className="border border-gray-200 rounded-lg p-2 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{message.name}</h3>
                          <p className="text-gray-600 text-sm">
                            {message.email}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-gray-500 text-xs">
                            {message.submittedAt !== "N/A"
                              ? new Date(message.submittedAt).toLocaleString()
                              : "N/A"}
                          </span>
                          <button
                            onClick={() => handleDelete("contact", message.id)}
                            disabled={isDeleting}
                            className="text-red-600 hover:text-red-800 flex items-center mt-2"
                          >
                            <FaTrash className="mr-1" /> Delete
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
                        <h4 className="font-medium mb-1">Message:</h4>
                        <p>{message.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AdminDashboard;
