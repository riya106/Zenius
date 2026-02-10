import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config/api";

const Summits = ({ onBack, onOpenSummitDetail }) => {
  const [summits, setSummits] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/summits`)
      .then((res) => res.json())
      .then((data) => setSummits(data))
      .catch((err) => console.log("Error fetching summits:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#ECFEFF] px-8 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Summits & Conferences
        </h1>

        <button
          onClick={onBack}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md"
        >
          Go Back
        </button>
      </div>

      <p className="text-gray-600 max-w-3xl mb-12">
        Explore global student summits, leadership conferences, startup forums,
        and exclusive opportunities to connect with mentors and founders.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {summits.map((summit) => (
          <div
            key={summit._id}
            className="bg-white rounded-3xl border border-teal-200 shadow-lg p-8 cursor-pointer hover:shadow-xl transition"
            onClick={() => onOpenSummitDetail(summit._id)}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {summit.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {summit.shortDescription}
            </p>

            <p className="text-teal-600 font-semibold text-sm">
              {summit.location}
            </p>

            <button className="mt-6 w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-full font-semibold shadow-md hover:opacity-90">
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summits;
