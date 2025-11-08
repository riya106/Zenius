import React from "react";

const HackathonPage = ({ onBack }) => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Hackathon Hub
        </h1>
        <button
          onClick={onBack}
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 px-4 py-2 rounded-xl text-white font-semibold hover:opacity-90 transition"
        >
          Go Back to Dashboard
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center px-6 py-12">
        <div className="w-full max-w-6xl bg-gray-900 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-semibold mb-10 text-center">
             Upcoming & Trending Hackathons
          </h2>

          {/* Hackathon List */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Zenius CodeSprint 2025",
                date: "📅 15th Dec 2025",
                desc: "A 24-hour AI focused contest where creativity meets code. Build real-time AI driven systems.",
              },
              {
                name: "Hack the Future",
                date: "📅 10th Jan 2026",
                desc: "Hybrid national-level innovation hackathon focused on futuristic product building.",
              },
              {
                name: "AI Innovators Challenge",
                date: "📅 25th Feb 2026",
                desc: "Showcase your AI engineering skills and solve real-world automation problems.",
              },
              {
                name: "Smart India Hackathon (SIH)",
                date: "📅 July 2026",
                desc: "Compete at a national scale to solve government & industry level problem statements.",
              },
              {
                name: "Microsoft Imagine Cup",
                date: "📅 March 2026",
                desc: "Build solutions that can change the world — one of the biggest global innovation hackathons.",
              },
              {
                name: "Google Solution Challenge",
                date: "📅 April 2026",
                desc: "Create impactful solutions aligned with UN Sustainable Development Goals.",
              },
            ].map((hack, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-black p-6 rounded-2xl h-full">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {hack.name}
                  </h3>
                  <p className="text-gray-400 mb-2">{hack.date}</p>
                  <p className="text-gray-300">{hack.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Quote */}
          <p className="mt-12 text-center text-gray-400 text-sm">
            💡 “Think. Code. Create. Compete. Every hackathon is a step closer to mastery.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
