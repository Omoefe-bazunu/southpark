import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { verifyEmail } = useAuth();
  const oobCode = searchParams.get("oobCode");

  useEffect(() => {
    const handleVerification = async () => {
      try {
        if (!oobCode) {
          throw new Error("Invalid verification link");
        }

        await verifyEmail(oobCode);
        toast.success("Email verified successfully!");
        navigate("/dashboard"); // Redirect to your dashboard or home page
      } catch (error) {
        console.error("Verification error:", error);
        toast.error(
          error.message || "Verification failed. Please request a new link."
        );
        navigate("/signup"); // Redirect to signup if verification fails
      }
    };

    handleVerification();
  }, [oobCode, navigate, verifyEmail]);

  return null; // This component doesn't render anything
};

export default VerifyEmail;
