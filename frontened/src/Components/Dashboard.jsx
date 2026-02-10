import React from "react";

export default function Dashboard({
  onOpenInternship,
  onOpenHackathon,
  onOpenDSA,
  onOpenSummits,
  onLogout,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdfa] to-[#e0f2fe] text-gray-800 flex flex-col">

      {/* Top Title */}
      <div className="w-full flex justify-center items-center py-10">
        <h1 className="text-8xl font-extrabold text-teal-600 tracking-widest drop-shadow-lg">
          ZENIUS
        </h1>
      </div>

      {/* Menu Headings */}
      <div className="flex justify-center gap-12 text-2xl font-bold text-gray-700 flex-wrap">
        <button
          onClick={onOpenInternship}
          className="hover:text-teal-600 transition"
        >
          Internship
        </button>

        <button
          onClick={onOpenHackathon}
          className="hover:text-teal-600 transition"
        >
          Hackathons
        </button>

        <button
          onClick={onOpenDSA}
          className="hover:text-teal-600 transition"
        >
          DSA
        </button>

        <button
          onClick={onOpenSummits}
          className="hover:text-teal-600 transition"
        >
          Summits
        </button>
      </div>

      {/* Line Section */}
      <div className="flex justify-center mt-5">
        <div className="w-[700px] h-[3px] bg-gradient-to-r from-teal-400 to-sky-400 rounded-full"></div>
      </div>

      {/* Cards Section - FULL WIDTH */}
      <div className="mt-12 px-6 md:px-20 flex flex-col gap-10">
{/* Live Hackathons */}
<div className="w-full bg-white/80 border border-sky-200 rounded-3xl p-12 shadow-md hover:shadow-xl hover:-translate-y-2 transition">
  
  <h2 className="text-4xl font-extrabold text-gray-600 mb-6">
     Hackathons 
  </h2>

  <div className="space-y-5 text-xl">

    {/* Hackathon 1 */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <div>
        <p className="font-bold text-gray-800">
          NASA Space Apps Challenge
        </p>
        <p className="text-gray-500 text-lg">
          Date: October 2026 (Official)
        </p>
      </div>

      <a
        href="https://www.spaceappschallenge.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition"
      >
        Register
      </a>
    </div>

    {/* Hackathon 2 */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <div>
        <p className="font-bold text-gray-800">
          UIDAI Data Hackathon 2026
        </p>
        <p className="text-gray-500 text-lg">
          Date: January 2026
        </p>
      </div>

      <a
        href="https://event.data.gov.in/challenge/uidai-data-hackathon-2026/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition"
      >
        Register
      </a>
    </div>

    {/* Hackathon 3 */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <div>
        <p className="font-bold text-gray-800">
          Odoo x GCET Hackathon
        </p>
        <p className="text-gray-500 text-lg">
          Date: 2026 (Check Website)
        </p>
      </div>

      <a
        href="https://hackathon.odoo.com/event/odoo-x-gcet-hackathon-26-2/register"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition"
      >
        Register
      </a>
    </div>

    {/* Hackathon 4 */}
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-gray-800">
          Technothon 2026
        </p>
        <p className="text-gray-500 text-lg">
          Date: Feb 28 – Mar 1, 2026
        </p>
      </div>

      <a
        href="https://www.technothon.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition"
      >
        Register
      </a>
    </div>

  </div>
</div>
{/* Top Internships */}
<div className="w-full bg-white/80 border border-teal-200 rounded-3xl p-12 shadow-md hover:shadow-xl hover:-translate-y-2 transition">

  <h2 className="text-4xl font-extrabold text-gray-600 mb-6">
    Top Internships 
  </h2>

  <div className="space-y-5 text-xl">

    {/* Internship 1 */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <div>
        <p className="font-bold text-gray-800">
          Internshala (Software Development Internships)
        </p>
        <p className="text-gray-500 text-lg">
          Updated Daily | India
        </p>
      </div>

      <a
        href="https://internshala.com/internships/computer-science-internship"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition"
      >
        Apply
      </a>
    </div>

    {/* Internship 2 */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <div>
        <p className="font-bold text-gray-800">
          LinkedIn Internships
        </p>
        <p className="text-gray-500 text-lg">
          Global | Remote + Onsite
        </p>
      </div>

      <a
        href="https://www.linkedin.com/jobs/internships/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition"
      >
        Apply
      </a>
    </div>

    {/* Internship 3 */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <div>
        <p className="font-bold text-gray-800">
          Google Careers Internships
        </p>
        <p className="text-gray-500 text-lg">
          Software Engineering | Global
        </p>
      </div>

      <a
        href="https://careers.google.com/jobs/results/?employment_type=INTERN"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition"
      >
        Apply
      </a>
    </div>

    {/* Internship 4 */}
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-gray-800">
          Microsoft Careers Internships
        </p>
        <p className="text-gray-500 text-lg">
          Intern Opportunities | Global
        </p>
      </div>

      <a
        href="https://careers.microsoft.com/v2/global/en/students"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition"
      >
        Apply
      </a>
    </div>

  </div>
</div>


        

        {/* Upcoming Summits */}
<div className="w-full bg-white/80 border border-indigo-200 rounded-3xl p-12 shadow-md hover:shadow-xl hover:-translate-y-2 transition">

  <h2 className="text-4xl font-extrabold text-gray-600 mb-6">
    Upcoming Summits 
  </h2>

  <div className="space-y-5 text-xl">

    {/* Summit 1 */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <div>
        <p className="font-bold text-gray-800">
          Web Summit
        </p>
        <p className="text-gray-500 text-lg">
          Tech Conference | Global
        </p>
      </div>

      <a
        href="https://websummit.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600 transition"
      >
        Register
      </a>
    </div>

    {/* Summit 2 */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <div>
        <p className="font-bold text-gray-800">
          Google I/O
        </p>
        <p className="text-gray-500 text-lg">
          Developer Conference | Online
        </p>
      </div>

      <a
        href="https://io.google/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600 transition"
      >
        Register
      </a>
    </div>

    {/* Summit 3 */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <div>
        <p className="font-bold text-gray-800">
          Microsoft Build
        </p>
        <p className="text-gray-500 text-lg">
          Developer Summit | Global
        </p>
      </div>

      <a
        href="https://build.microsoft.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600 transition"
      >
        Register
      </a>
    </div>

    {/* Summit 4 */}
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-gray-800">
          AWS re:Invent
        </p>
        <p className="text-gray-500 text-lg">
          Cloud + DevOps Summit | USA
        </p>
      </div>

      <a
        href="https://reinvent.awsevents.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600 transition"
      >
        Register
      </a>
    </div>

  </div>
</div>


      </div>

      {/* Bottom Text */}
      <div className="flex justify-center mt-12">
        <p className="text-gray-600 text-lg font-medium">
           explore 🌿✨
        </p>
      </div>

      {/* Logout */}
      <div className="flex justify-center mt-10 pb-10">
        <button
          onClick={onLogout}
          className="px-10 py-3 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 transition shadow-lg"
        >
          Logout
        </button>
      </div>

    </div>
  );
}
