import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  applyActionCode,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      if (!firebaseUser.emailVerified) {
        toast.warn("Please verify your email before logging in.");
        await signOut(auth);
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUser({ ...firebaseUser, ...userSnap.data() });
        } else {
          setUser(firebaseUser); // Use Firebase Auth data only if no Firestore document
        }
      } catch (error) {
        console.error("Error in onAuthStateChanged:", error);
        setUser(firebaseUser); // Fallback to Firebase Auth data on error
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!userCredential.user.emailVerified) {
      toast.warn("Please verify your email before logging in.");
      await signOut(auth);
      throw new Error("Email not verified.");
    }
  };

  const signup = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await sendEmailVerification(user);
      toast.success("Account created! Check your email to verify.");
      return true;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  const verifyEmail = async (oobCode) => {
    try {
      await applyActionCode(auth, oobCode);
      if (auth.currentUser) {
        await auth.currentUser.reload();
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUser({ ...auth.currentUser, ...userSnap.data() });
        } else {
          setUser(auth.currentUser);
        }
      }
      toast.success("Email verified successfully!");
    } catch (error) {
      toast.error(
        error.message ||
          "Verification failed. Please try again or request a new link."
      );
    } finally {
      window.location.href = `${window.location.origin}/login`;
    }
  };

  const resendVerification = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user.emailVerified) {
        throw new Error("Email is already verified. Please log in.");
      }

      await sendEmailVerification(user, {
        url: `${window.location.origin}/login`,
        handleCodeInApp: true,
      });

      await signOut(auth);
      toast.success("Verification email sent successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to resend verification email.");
      throw error;
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}/login`,
      });
      toast.success("Password reset email sent! Please check your inbox.");
    } catch (error) {
      toast.error(error.message || "Failed to send password reset email.");
      throw error;
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        verifyEmail,
        resendVerification,
        resetPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
