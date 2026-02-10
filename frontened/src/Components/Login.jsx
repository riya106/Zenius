import React, { useState } from "react";
import { auth, db, provider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Login = ({ onLoginSuccess }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Pretty Firebase error messages
  const formatError = (msg) => msg.replace("Firebase:", "").replace("auth/", "");

  // 🔹 Reset Password
  const handleForgotPassword = async () => {
    if (!email) {
      return alert("Enter your email to reset password.");
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("📧 Reset email sent! Check your inbox.");
    } catch (error) {
      alert(formatError(error.message));
    }
  };

  // 🔹 Google Sign-In
  const handleGoogleSignIn = async () => {
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const ref = doc(db, "users", user.uid);
      const snapshot = await getDoc(ref);

      if (!snapshot.exists()) {
        await setDoc(
          ref,
          {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            createdAt: new Date(),
            provider: "google",
          },
          { merge: true }
        );
      }

      onLoginSuccess(); // Go to dashboard
    } catch (error) {
      alert(formatError(error.message));
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Email/Password Signup or Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLoginMode) {
        await signInWithEmailAndPassword(auth, email, password);
        onLoginSuccess();
      } else {
        if (password !== confirmPassword) {
          alert("⚠️ Passwords do not match!");
          return;
        }

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await setDoc(
          doc(db, "users", user.uid),
          {
            name,
            email,
            createdAt: new Date(),
            provider: "email",
          },
          { merge: true }
        );

        onLoginSuccess();
      }
    } catch (error) {
      alert(formatError(error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Auth Card */}
      <div className="relative w-[430px] bg-black/70 border border-purple-700 p-8 rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.5)]">
        <h2 className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-4">
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>

        <div className="relative flex h-12 mb-4 border border-purple-500 rounded-full overflow-hidden">
          <button
            onClick={() => setIsLoginMode(true)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLoginMode ? "text-white" : "text-gray-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginMode(false)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLoginMode ? "text-white" : "text-gray-400"
            }`}
          >
            Sign Up
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 ${
              isLoginMode ? "left-0" : "left-1/2"
            }`}
          ></div>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-600 text-white outline-none focus:border-purple-500 placeholder-gray-400 rounded-full"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-600 text-white outline-none focus:border-purple-500 placeholder-gray-400 rounded-full"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-600 text-white outline-none focus:border-purple-500 placeholder-gray-400 rounded-full"
          />

          {isLoginMode && (
            <p
              onClick={handleForgotPassword}
              className="text-right text-purple-400 hover:underline cursor-pointer"
            >
              Forgot Password?
            </p>
          )}

          {!isLoginMode && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-600 text-white outline-none focus:border-purple-500 placeholder-gray-400 rounded-full"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-lg font-medium ${
              loading ? "opacity-40 cursor-not-allowed" : "hover:opacity-90"
            } transition`}
          >
            {loading
              ? "Please wait..."
              : isLoginMode
              ? "Login"
              : "Sign Up"}
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 p-3 border border-purple-500 text-white rounded-full text-lg font-medium hover:bg-white/10 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6"
            />
            Continue with Google
          </button>

          <p className="text-center text-gray-400">
            {isLoginMode ? "Don’t have an account?" : "Already have an account?"}{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLoginMode);
              }}
              className="text-purple-400 hover:underline"
            >
              {isLoginMode ? "Sign up now" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;






