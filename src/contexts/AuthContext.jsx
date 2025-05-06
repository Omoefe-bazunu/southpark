import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        if (!firebaseUser.emailVerified) {
          toast.warn("Please verify your email before logging in.");
          await signOut(auth);
          setUser(null);
          setLoading(false);
          return;
        }

        const userRef = doc(db, "users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUser({ ...firebaseUser, ...userSnap.data() });
        } else {
          const userData = {
            name: firebaseUser.displayName || "Anonymous",
            email: firebaseUser.email,
            approved: false,
            eligibility: false,
            createdAt: new Date().toISOString(),
          };
          await setDoc(userRef, userData);
          setUser({ ...firebaseUser, ...userData });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
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

    const userRef = doc(db, "users", userCredential.user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const userData = {
        name: userCredential.user.displayName || "Anonymous",
        email: userCredential.user.email,
        approved: false,
        eligibility: false,
        createdAt: new Date().toISOString(),
      };
      await setDoc(userRef, userData);
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

      const userRef = doc(db, "users", user.uid);
      const userData = {
        name: name || "Anonymous",
        email: email,
        approved: false,
        eligibility: false,
        createdAt: new Date().toISOString(),
      };

      try {
        await setDoc(userRef, userData);
      } catch (firestoreError) {
        console.error("Firestore error:", firestoreError);
        await user.delete();
        throw new Error("Failed to create user profile. Please try again.");
      }

      toast.success(
        "Sign up successful! Please check your email to verify your account."
      );
      await signOut(auth);
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      let errorMessage = "Signup failed. Please try again.";

      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email already in use.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters.";
          break;
        case "auth/operation-not-allowed":
          errorMessage = "Email/password accounts are not enabled.";
          break;
      }

      throw new Error(errorMessage);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
