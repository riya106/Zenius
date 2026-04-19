// frontend/src/Components/Front.jsx
import React from "react";

function Front({ onGetStarted, onLoginClick, onSignupClick }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f0fdfa] to-[#e0f2fe] dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 overflow-hidden relative">

      {/* Background Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-teal-300 dark:bg-teal-600 opacity-30 blur-3xl rounded-full top-1/3 left-1/4 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-300 dark:bg-indigo-600 opacity-20 blur-3xl rounded-full bottom-1/4 right-1/4"></div>

      {/* Auth Buttons */}
      <div className="absolute top-6 right-8 flex gap-4 z-20">
        <button
          onClick={onLoginClick}
          className="px-6 py-2 rounded-full border border-teal-400 dark:border-teal-600 text-teal-600 dark:text-teal-400 font-semibold hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 transition"
        >
          Login
        </button>

        <button
          onClick={onSignupClick}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-sky-500 text-white font-semibold hover:opacity-90 transition"
        >
          Sign Up
        </button>
      </div>

      {/* Main Title */}
      <h1 className="text-[16vw] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-500 to-blue-500 animate-fadeIn">
        Zenius
      </h1>

      {/* Tagline */}
      <p className="mt-8 text-[3vw] md:text-[1.8vw] text-gray-600 dark:text-gray-400 font-semibold tracking-wide animate-fadeInSlow">
        Your Zenius to be Genius.
      </p>

      {/* CTA Button */}
      <button
        onClick={onGetStarted}
        className="mt-10 px-10 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-teal-500 to-sky-500 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fadeInSlow"
      >
        Get Started
      </button>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-fadeInSlow {
          animation: fadeIn 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Front;