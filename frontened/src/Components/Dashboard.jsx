import React, { useState } from "react";
import Login from "./Login"; // make sure path is correct

const Dashboard = ({ onLoginClick, onOpenInternship, onOpenHackathon, onOpenDSA,onOpenSummits }) => {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <Login onBack={onLoginClick} />; // to return to dashboard
  }

  return (
    <div
      className="min-h-screen w-full text-white flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Header */}
      <div className="w-full flex justify-between items-center px-10 py-6 absolute top-0 z-10">
        
        {/* Center Title */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 drop-shadow-[0_0_25px_rgba(139,92,246,0.8)]">
          ZENIUS
        </h1>

        {/* Login / Sign Up */}
        <div className="flex space-x-4 ml-auto">
          <button
            onClick={() => setShowLogin(true)}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
          >
            Login
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="px-5 py-2 rounded-full border border-purple-500 text-purple-400 font-medium hover:bg-purple-600 hover:text-white transition"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 text-center">

          {/* Internship */}
          <div
            onClick={onOpenInternship}
            className="w-64 h-64 flex items-center justify-center text-2xl font-semibold rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] cursor-pointer"
          >
            Internship
          </div>

          {/* Hackathon */}
          <div
            onClick={onOpenHackathon}
            className="w-64 h-64 flex items-center justify-center text-2xl font-semibold rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(236,72,153,0.7)] cursor-pointer"
          >
            Hackathon
          </div>

          {/* DSA */}
          <div
            onClick={onOpenDSA}
            className="w-64 h-64 flex items-center justify-center text-2xl font-semibold rounded-2xl bg-gradient-to-br from-pink-500 to-indigo-500 transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(236,72,153,0.7)] cursor-pointer"
          >
            DSA
          </div>

          {/* Summits — currently doesn't have functionality */}
          <div
  onClick={onOpenSummits}
  className="w-64 h-64 flex items-center justify-center text-2xl font-semibold rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] cursor-pointer"
>
  Summits
</div>

        </div>
      </div>

      {/* Tagline */}
      <p className="absolute bottom-8 text-gray-300 text-sm z-10">
        Begin your journey of learning 
      </p>
    </div>
  );
};

export default Dashboard;
