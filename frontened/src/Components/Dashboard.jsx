import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api"; // 👈 ADD THIS

const Dsa = ({ onBack }) => {
  const [syllabus, setSyllabus] = useState([]);
  const [roadmap, setRoadmap] = useState([]);
  const [practiceSheets, setPracticeSheets] = useState([]);
  const [leetcodeQuestions, setLeetcodeQuestions] = useState([]);

  useEffect(() => {
    // Fetch Syllabus
    axios
      .get(`${API_BASE_URL}/api/dsa/syllabus`)
      .then(res => setSyllabus(res.data))
      .catch(err => console.log(err));

    // Fetch Roadmap
    axios
      .get(`${API_BASE_URL}/api/dsa/roadmap`)
      .then(res => setRoadmap(res.data))
      .catch(err => console.log(err));

    // Fetch Practice Sheets
    axios
      .get(`${API_BASE_URL}/api/dsa/practiceSheets`)
      .then(res => setPracticeSheets(res.data))
      .catch(err => console.log(err));

    // Fetch LeetCode Questions
    axios
      .get(`${API_BASE_URL}/api/dsa/leetcodeQuestions`)
      .then(res => setLeetcodeQuestions(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center pt-16 px-6">
      {/* Header */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-10">
        DSA Roadmap
      </h1>

      {/* Go to Dashboard Button */}
      <button
        onClick={onBack}
        className="mb-8 px-6 py-3 text-lg rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-xl hover:scale-105 transition-transform"
      >
        Go to Dashboard
      </button>

      {/* Description */}
      <div className="max-w-4xl text-center leading-relaxed text-gray-300 text-lg mb-10">
        Data Structures and Algorithms (DSA) are the building blocks of coding interviews. Master them step-by-step with consistency.
      </div>

      {/* Syllabus */}
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
        DSA Syllabus
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full max-w-6xl">
        {syllabus.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-black p-6 rounded-2xl">
              <h3 className="text-xl font-bold">{item.topic}</h3>
              <p className="text-gray-300">{item.subtopics}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Roadmap */}
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
        DSA Roadmap
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-6xl">
        {roadmap.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-black p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                {item.duration}
              </h3>
              <p>{item.focus}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Practice Sheets */}
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
        Top DSA Practice Sheets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full max-w-6xl">
        {practiceSheets.map((sheet, idx) => (
          <a
            key={idx}
            href={sheet.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-black p-6 rounded-2xl text-indigo-400 font-semibold">
              {sheet.name}
            </div>
          </a>
        ))}
      </div>

      {/* LeetCode */}
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
        Important LeetCode Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full max-w-6xl">
        {leetcodeQuestions.map((q, idx) => (
          <a
            key={idx}
            href={q.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-black p-6 rounded-2xl text-indigo-400 font-semibold">
              {q.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dsa;
