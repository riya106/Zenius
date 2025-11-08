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
];

const InternshipPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10"
    style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501430843268-4a77f9c52af5?auto=format&fit=crop&w=1920&q=80')",
  }}
    >
      {/* Header / Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Internship TimeLine
        </h1>
        <p className="text-gray-300">
         “Turning Opportunities into Experience.”
        </p>
      </header>

      {/* Internship Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
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
      <footer className="text-center mt-12 text-gray-500 text-sm">
        © 2025 Zenius | Begin your jounery of learning
      </footer>
    </div>
  );
};

export default InternshipPage;
