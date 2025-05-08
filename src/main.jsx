import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
