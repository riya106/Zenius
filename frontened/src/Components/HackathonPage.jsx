import React, { useEffect, useState } from "react";
import axios from "axios";

const HackathonPage = ({ onBack }) => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/hackathons")
      .then((res) => setHackathons(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      
      <div className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Hackathon Hub
        </h1>

        <button
          onClick={onBack}
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 px-4 py-2 rounded-xl text-white font-semibold hover:opacity-90"
        >
          Go Back to Dashboard
        </button>
      </div>

      {/* Main */}
      <div className="flex-grow flex flex-col items-center px-6 py-12">
        <div className="w-full max-w-6xl bg-gray-900 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Upcoming & Trending Hackathons
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {hackathons.map((hack, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-black p-6 rounded-2xl">
                  <h3 className="text-xl font-bold">{hack.name}</h3>
                  <p className="text-gray-400">{hack.date}</p>
                  <p className="text-gray-300">{hack.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-gray-400 text-sm">
            💡 “Think. Code. Create. Compete.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;

