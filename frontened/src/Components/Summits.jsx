import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config/api"; // 👈 ADD THIS

const Summits = ({ onBack, onOpenSummitDetail }) => {
  const [summits, setSummits] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/summits`)
      .then((res) => res.json())
      .then((data) => setSummits(data))
      .catch((err) => console.log("Error fetching summits:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white flex flex-col items-center p-10">
      {/* Back button */}
      <button
        onClick={onBack}
        className="self-start mb-6 px-6 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-lg"
      >
        ← Back
      </button>

      <h1 className="text-5xl font-extrabold mb-4">Summits & Conferences</h1>

      <p className="text-lg text-center max-w-2xl mb-10 opacity-90">
        Explore global student summits, leadership conferences, startup forums,
        and exclusive opportunities to connect with mentors and founders.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {summits.map((summit) => (
          <div
            key={summit._id}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition cursor-pointer"
            onClick={() => onOpenSummitDetail(summit._id)}
          >
            <h2 className="text-2xl font-semibold mb-2">{summit.title}</h2>
            <p className="opacity-80 text-sm">{summit.shortDescription}</p>
            <p className="opacity-70 text-xs mt-2">{summit.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summits;
