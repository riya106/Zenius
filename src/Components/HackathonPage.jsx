import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";

const HackathonPage = ({ onBack }) => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/hackathons`)
      .then((res) => setHackathons(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#ECFEFF] px-8 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Hackathon Opportunities
        </h1>

        <button
          onClick={onBack}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md"
        >
          Go Back
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {hackathons.map((hack, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-teal-200 shadow-lg p-8 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {hack.name}
              </h2>

              <p className="text-teal-600 font-semibold mb-2">
                {hack.organizer || "Hackathon Organizer"}
              </p>

              <p className="text-gray-600 mb-1">
                <strong>Duration:</strong> {hack.date}
              </p>

              <p className="text-gray-600">
                <strong>Mode:</strong> {hack.mode || "Online"}
              </p>
            </div>

            <button className="mt-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-full font-semibold shadow-md hover:opacity-90">
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonPage;
