// frontend/src/Components/Dsa.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";

const Dsa = ({ onBack }) => {
  const [roadmap, setRoadmap] = useState([]);
  const [practiceSheets, setPracticeSheets] = useState([]);
  const [leetcodeQuestions, setLeetcodeQuestions] = useState([]);
  const [syllabus, setSyllabus] = useState([]);
  const [activeTab, setActiveTab] = useState("roadmap");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [roadmapRes, sheetsRes, leetcodeRes, syllabusRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/dsa/roadmap`).catch(() => ({ data: [] })),
          axios.get(`${API_BASE_URL}/api/dsa/practiceSheets`).catch(() => ({ data: [] })),
          axios.get(`${API_BASE_URL}/api/dsa/leetcodeQuestions`).catch(() => ({ data: [] })),
          axios.get(`${API_BASE_URL}/api/dsa/syllabus`).catch(() => ({ data: [] }))
        ]);
        
        setRoadmap(roadmapRes.data);
        setPracticeSheets(sheetsRes.data);
        setLeetcodeQuestions(leetcodeRes.data);
        setSyllabus(syllabusRes.data);
      } catch (error) {
        console.error("Error fetching DSA data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const tabs = [
    { id: "roadmap", label: " Roadmap", icon: "🗺️" },
    { id: "sheets", label: " Practice Sheets", icon: "📋" },
    { id: "leetcode", label: " LeetCode", icon: "⚡" },
    { id: "syllabus", label: " Syllabus", icon: "📘" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-sky-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-teal-500/20 dark:from-indigo-900/30 dark:to-teal-900/30"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
          <div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
              DSA Mastery Path
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Master Data Structures & Algorithms with structured learning
            </p>
          </div>

          <button
            onClick={onBack}
            className="bg-indigo-500 px-6 py-3 rounded-2xl text-white font-semibold hover:bg-indigo-600 transition shadow-md"
          >
            ← Go Back
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-wrap gap-3 border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-lg font-semibold transition-all rounded-t-2xl ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-indigo-500 to-teal-500 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <>
            {/* Roadmap Tab */}
            {activeTab === "roadmap" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {roadmap.length === 0 ? (
                  <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No roadmap data available</p>
                ) : (
                  roadmap.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/40 dark:border-gray-700 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition"
                    >
                      <div className="text-3xl mb-3">📌</div>
                      <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                        {item.duration}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">{item.focus}</p>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Practice Sheets Tab */}
            {activeTab === "sheets" && (
              <div className="grid gap-6 md:grid-cols-2">
                {practiceSheets.length === 0 ? (
                  <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No practice sheets available</p>
                ) : (
                  practiceSheets.map((sheet, idx) => (
                    <a
                      key={idx}
                      href={sheet.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/40 dark:border-gray-700 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition group"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          {sheet.name}
                        </h3>
                        <span className="text-indigo-500 group-hover:translate-x-1 transition">→</span>
                      </div>
                    </a>
                  ))
                )}
              </div>
            )}

            {/* LeetCode Tab */}
            {activeTab === "leetcode" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {leetcodeQuestions.length === 0 ? (
                  <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No LeetCode questions available</p>
                ) : (
                  leetcodeQuestions.map((question, idx) => (
                    <a
                      key={idx}
                      href={question.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/40 dark:border-gray-700 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">⚡</span>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                            {question.name}
                          </h3>
                          <p className="text-sm text-indigo-500 group-hover:underline">Solve Problem →</p>
                        </div>
                      </div>
                    </a>
                  ))
                )}
              </div>
            )}

            {/* Syllabus Tab */}
            {activeTab === "syllabus" && (
              <div className="grid gap-6 md:grid-cols-2">
                {syllabus.length === 0 ? (
                  <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No syllabus data available</p>
                ) : (
                  syllabus.map((topic, idx) => (
                    <div
                      key={idx}
                      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/40 dark:border-gray-700 rounded-3xl p-6 shadow-xl"
                    >
                      <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-3">
                        {topic.topic}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">{topic.subtopics}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dsa;