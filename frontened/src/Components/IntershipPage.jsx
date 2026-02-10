import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config/api";

const InternshipPage = ({ onBack, onOpenDetail }) => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/internships`)
      .then((res) => res.json())
      .then((data) => setInternships(data))
      .catch((err) => console.error("Error fetching internships:", err));
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#f0fdfa] to-[#e0f2fe] text-gray-800 flex flex-col">
      
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-teal-200 bg-white/70 backdrop-blur-md shadow-sm">
        <h1 className="text-4xl font-extrabold text-gray-600 tracking-wide">
          Internship Opportunities 
        </h1>

        <button
          onClick={onBack}
          className="bg-sky-500 px-6 py-3 rounded-2xl text-white font-semibold hover:bg-sky-600 transition shadow-md"
        >
          Go Back
        </button>
      </div>

      {/* Internship Cards */}
      <div className="flex-grow px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {internships.map((intern) => {
          const id = intern._id || intern.id;

          return (
            <div
              key={id}
              className="bg-white/80 border border-teal-200 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition cursor-pointer"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
                    {intern.title}
                  </h2>

                  <p className="text-lg font-semibold text-teal-600 mb-1">
                    {intern.company}
                  </p>

                  <p className="text-md text-gray-600 mb-2">
                    Duration: {intern.duration}
                  </p>

                  <p className="text-md text-gray-600">
                     Category: {intern.category}
                  </p>
                </div>

                <button
                  onClick={() => onOpenDetail(id)}
                  className="mt-8 bg-gradient-to-r from-teal-500 to-sky-500 text-white font-bold px-6 py-3 rounded-2xl hover:opacity-90 transition shadow-md"
                >
                  View Details →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="text-center mt-6 mb-6 text-gray-500 text-sm font-medium">
        © 2026 Zenius | Begin your journey of learning 
      </footer>
    </div>
  );
};

export default InternshipPage;
