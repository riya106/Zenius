import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config/api"; // 👈 ADD THIS

const SummitDetail = ({ summitId, onBack }) => {
  const [summit, setSummit] = useState(null);

  useEffect(() => {
    if (!summitId) return;

    fetch(`${API_BASE_URL}/api/summits/${summitId}`)
      .then((res) => res.json())
      .then((data) => setSummit(data))
      .catch((err) => console.log("Error fetching summit:", err));
  }, [summitId]);

  if (!summit) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white p-10">
      {/* Back button */}
      <button
        onClick={onBack}
        className="px-6 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-lg mb-6"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-extrabold mb-4">{summit.title}</h1>

      <p className="opacity-80 mb-2">{summit.location}</p>
      <p className="opacity-70 mb-4">{summit.date}</p>

      <p className="max-w-2xl mb-10 opacity-90">{summit.description}</p>

      <a
        href={summit.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition"
      >
        Apply Now →
      </a>
    </div>
  );
};

export default SummitDetail;
