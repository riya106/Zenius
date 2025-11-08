import React from "react";

const Dsa = ({ onBack }) => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center pt-16 px-6">

      {/* Header */}
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text mb-10">
        DSA Roadmap
      </h1>

      {/* Go to Dashboard Button */}
      <button
        onClick={onBack}
        className="mb-8 px-6 py-3 text-lg rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl hover:scale-105 transition-transform"
      >
        Go to Dashboard
      </button>

      {/* Content */}
      <div className="max-w-4xl text-center leading-relaxed text-gray-300 text-lg">
        <p>
          Data Structures and Algorithms (DSA) are the building blocks of coding interviews.
          Master them step-by-step with consistency.
        </p>

        <h2 className="text-3xl font-semibold text-purple-400 mt-10">Topics to Learn:</h2>
        <ul className="text-left list-disc list-inside mt-4 space-y-2">
          <li>Arrays & Strings</li>
          <li>Linked List</li>
          <li>Stack & Queue</li>
          <li>Recursion & Backtracking</li>
          <li>Trees & Binary Trees</li>
          <li>Graphs</li>
          <li>Dynamic Programming</li>
          <li>Searching & Sorting</li>
        </ul>
      </div>
    </div>
  );
};

export default Dsa;
