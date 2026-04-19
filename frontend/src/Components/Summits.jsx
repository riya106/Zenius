// frontend/src/Components/Summits.jsx
import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config/api";

const Summits = ({ onBack }) => {
  const [summits, setSummits] = useState([]);
  const [filteredSummits, setFilteredSummits] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSummits();
  }, []);

  const fetchSummits = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/summits`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setSummits(data);
      setFilteredSummits(data);
    } catch (err) {
      console.error("Error fetching summits:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = summits.filter((summit) =>
      summit.title?.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "All") {
      filtered = filtered.filter(
        (summit) => summit.category === category
      );
    }

    setFilteredSummits(filtered);
  }, [search, category, summits]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-sky-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading summits...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-sky-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <button onClick={fetchSummits} className="px-4 py-2 bg-indigo-500 text-white rounded-lg">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-sky-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-gray-200">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
        <div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
            Summits & Conferences
          </h1>
        </div>

        <button
          onClick={onBack}
          className="bg-indigo-500 px-6 py-3 rounded-2xl text-white font-semibold hover:bg-indigo-600 transition shadow-md"
        >
          Go Back
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row gap-6 items-center justify-between">
        <input
          type="text"
          placeholder="Search summits..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-teal-400 outline-none shadow-sm"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
        >
          <option value="All">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      {/* CARDS */}
      <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredSummits.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400 text-lg">
            No summits found.
          </p>
        ) : (
          filteredSummits.map((summit) => (
            <div
              key={summit._id || summit.id}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/40 dark:border-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {summit.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {summit.description || summit.shortDescription || "No description available"}
                </p>

                <p className="text-teal-600 dark:text-teal-400 font-semibold text-sm mb-1">
                  📍 {summit.location || "Location TBA"}
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  📅 {summit.date}
                </p>

                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                  {summit.category || "Conference"}
                </span>
              </div>

              <a
                href={summit.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-6 w-full bg-gradient-to-r from-teal-500 to-indigo-500 text-white py-3 rounded-2xl font-semibold shadow-md hover:scale-105 transition"
              >
                Apply Now →
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Summits;