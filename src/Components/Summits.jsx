import React from "react";

const Summits = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white flex flex-col items-center p-10">

      <button
        onClick={onBack}
        className="self-start mb-6 px-6 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-lg"
      >
        ← Back
      </button>

      <h1 className="text-5xl font-extrabold mb-10 text-center drop-shadow-lg">
        Summits & Conferences
      </h1>

      <p className="text-lg text-center max-w-2xl mb-10 opacity-90">
        Explore global student summits, leadership conferences, startup forums,
        and exclusive opportunities to connect with mentors and founders.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

        {/* Card Example */}
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
          <h2 className="text-2xl font-semibold mb-3">Harvard College Conference</h2>
          <p className="opacity-80 text-sm">
            A global student leadership summit hosted at Harvard University.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
          <h2 className="text-2xl font-semibold mb-3">Youth Leadership Summit - Dubai</h2>
          <p className="opacity-80 text-sm">
            Leadership, entrepreneurship and startup culture event in UAE.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Summits;
