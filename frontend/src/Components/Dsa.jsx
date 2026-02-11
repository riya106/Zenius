import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api";

const Dsa = ({ onBack }) => {
  const [syllabus, setSyllabus] = useState([]);
  const [roadmap, setRoadmap] = useState([]);
  const [practiceSheets, setPracticeSheets] = useState([]);
  const [leetcodeQuestions, setLeetcodeQuestions] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/dsa/syllabus`)
      .then((res) => setSyllabus(res.data));

    axios.get(`${API_BASE_URL}/api/dsa/roadmap`)
      .then((res) => setRoadmap(res.data));

    axios.get(`${API_BASE_URL}/api/dsa/practiceSheets`)
      .then((res) => setPracticeSheets(res.data));

    axios.get(`${API_BASE_URL}/api/dsa/leetcodeQuestions`)
      .then((res) => setLeetcodeQuestions(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-[#ECFEFF] px-8 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          DSA Roadmap
        </h1>

        <button
          onClick={onBack}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md"
        >
          Go Back
        </button>
      </div>

      <p className="text-gray-600 max-w-4xl mb-12">
        Data Structures and Algorithms (DSA) are the foundation of coding interviews.
        Learn them step-by-step with a structured roadmap and curated practice resources.
      </p>

      {/* Syllabus */}
      <Section title="DSA Syllabus">
        {syllabus.map((item, idx) => (
          <Card key={idx}>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.topic}
            </h3>
            <p className="text-gray-600">{item.subtopics}</p>
          </Card>
        ))}
      </Section>

      {/* Roadmap */}
      <Section title="DSA Roadmap">
        {roadmap.map((item, idx) => (
          <Card key={idx}>
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              {item.duration}
            </h3>
            <p className="text-gray-600">{item.focus}</p>
          </Card>
        ))}
      </Section>

      {/* Practice Sheets */}
      <Section title="Top DSA Practice Sheets">
        {practiceSheets.map((sheet, idx) => (
          <Card key={idx}>
            <a
              href={sheet.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              {sheet.name} →
            </a>
          </Card>
        ))}
      </Section>

      {/* LeetCode */}
      <Section title="Important LeetCode Questions">
        {leetcodeQuestions.map((q, idx) => (
          <Card key={idx}>
            <a
              href={q.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              {q.name} →
            </a>
          </Card>
        ))}
      </Section>
    </div>
  );
};

/* 🔁 Reusable UI blocks (same pattern as Internship page) */

const Section = ({ title, children }) => (
  <>
    <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  </>
);

const Card = ({ children }) => (
  <div className="bg-white rounded-3xl border border-teal-200 shadow-lg p-8 hover:shadow-xl transition">
    {children}
  </div>
);

export default Dsa;
