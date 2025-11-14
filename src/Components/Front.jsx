import React from "react";

function Front({ onGetStarted, onLoginClick, onSignupClick }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden relative">
      {/* Glowing background light */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-25 blur-3xl rounded-full top-1/3 left-1/4 animate-pulse"></div>

      {/* 🔹 Top Navigation (Login & Sign Up) */}
      <div className="absolute top-6 right-8 flex gap-4 z-20">
        <button
          onClick={onLoginClick}
          className="px-5 py-2 rounded-full border border-purple-500 text-purple-400 font-medium hover:bg-purple-600 hover:text-white transition"
        >
          Login
        </button>

        <button
          onClick={onSignupClick}
          className="px-5 py-2 rounded-full border border-purple-500 text-purple-400 font-medium hover:bg-purple-600 hover:text-white transition"
        >
          Sign Up
        </button>
      </div>

      {/* Zenius title */}
      <h1 className="text-[18vw] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-[0_0_40px_rgba(147,51,234,0.7)] animate-fadeIn">
        Zenius
      </h1>

      {/* Tagline */}
      <p className="mt-8 text-[3vw] md:text-[2vw] text-gray-200 font-semibold tracking-wide animate-fadeInSlow">
        Your Zenius to be Genius.
      </p>

      {/* Get Started Button */}
      <button
        onClick={onGetStarted}
        className="mt-10 px-10 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,51,234,0.8)] transition-all duration-300 animate-fadeInSlow"
      >
        Get Started
      </button>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-fadeInSlow {
          animation: fadeIn 2.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Front;





