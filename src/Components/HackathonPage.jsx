import React from "react";

const HackathonPage = ({ onBack }) => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Hackathon Hub</h1>
        <button
          onClick={onBack}
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 px-4 py-2 rounded-xl text-white font-semibold hover:opacity-90 transition"
        >
          Go Back to Dashboard
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl bg-gray-900 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            🚀 Upcoming Hackathons
          </h2>

          {/* Hackathon List */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 rounded-2xl">
              <div className="bg-black p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Zenius CodeSprint 2025
                </h3>
                <p className="text-gray-400 mb-2">📅 15th Dec 2025</p>
                <p className="text-gray-300">
                  A 24-hour challenge where creativity meets code. Build
                  real-world AI-driven solutions and compete with the best.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-2xl">
              <div className="bg-black p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Hack the Future
                </h3>
                <p className="text-gray-400 mb-2">📅 10th Jan 2026</p>
                <p className="text-gray-300">
                  Collaborate, create, and code futuristic ideas in this hybrid
                  hackathon celebrating innovation and teamwork.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-1 rounded-2xl">
              <div className="bg-black p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2 text-white">
                  AI Innovators Challenge
                </h3>
                <p className="text-gray-400 mb-2">📅 25th Feb 2026</p>
                <p className="text-gray-300">
                  Compete in the ultimate AI innovation challenge! Showcase your
                  AI engineering skills to solve real-world problems.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-10 text-center text-gray-400 text-sm">
            💡 “Think. Code. Create.” Every hackathon is a chance to build
            something that matters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;




