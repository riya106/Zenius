import React from "react";

const internships = [
  {
    title: "Frontend Developer Intern",
    company: "Zenius",
    duration: "Oct 2025 – Dec 2025",
    description:
      "Work on building responsive and interactive web interfaces using React.js and Tailwind CSS.",
  },
  {
    title: "Backend Developer Intern",
    company: "TechNova",
    duration: "Aug 2025 – Oct 2025",
    description:
      "Develop REST APIs using Node.js and Express, integrate databases, and optimize performance.",
  },
  {
    title: "Full Stack Intern",
    company: "CodeVerse",
    duration: "May 2025 – July 2025",
    description:
      "Contribute to both front-end and back-end systems while collaborating with a dynamic tech team.",
  },
  {
    title: "UI/UX Design Intern",
    company: "PixelCraft Studio",
    duration: "Jan 2026 – Mar 2026",
    description:
      "Design intuitive user experiences using Figma and create smooth UI flows.",
  },
  {
    title: "Machine Learning Intern",
    company: "NeuroAI Labs",
    duration: "Jul 2025 – Sep 2025",
    description:
      "Train machine learning models, preprocess datasets, and optimize performance using Python.",
  },
  {
    title: "Cloud Engineering Intern",
    company: "Infinity Cloud",
    duration: "Jun 2025 – Aug 2025",
    description:
      "Work with AWS cloud computing environment, automate processes, and maintain deployments.",
  },
];

const InternshipPage = ({ onBack }) => {
  return (
    <div
      className="min-h-screen w-full bg-black text-white flex flex-col"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501430843268-4a77f9c52af5?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Internship Opportunities
        </h1>

        <button
          onClick={onBack}
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 px-4 py-2 rounded-xl text-white font-semibold hover:opacity-90 transition"
        >
          Go Back to Dashboard
        </button>
      </div>

      {/* Internship Cards */}
      <div className="flex-grow px-6 py-12 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[2px] rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="bg-black rounded-2xl p-6 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{intern.title}</h2>
                <p className="text-lg text-gray-400 mb-1">{intern.company}</p>
                <p className="text-sm text-gray-500 mb-4">{intern.duration}</p>
                <p className="text-gray-300">{intern.description}</p>
              </div>
              <button className="mt-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-black font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center mt-6 mb-6 text-gray-400 text-sm">
        © 2025 Zenius | Begin your journey of learning
      </footer>
    </div>
  );
};

export default InternshipPage;
