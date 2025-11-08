import React, { useState } from "react";
import Front from "./Components/Front";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import InternshipPage from "./Components/IntershipPage";
import HackathonPage from "./Components/HackathonPage";


const App = () => {
  const [currentPage, setCurrentPage] = useState("front");

  const handleGetStarted = () => setCurrentPage("dashboard");
  const handleLogin = () => setCurrentPage("login");
  const handleBackToDashboard = () => setCurrentPage("dashboard");
   const handleOpenInternship = () => setCurrentPage("internship");
   const handleOpenHackathon = () => setCurrentPage("hackathon");

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black text-white">
      {currentPage === "front" && <Front onGetStarted={handleGetStarted} />}

      {currentPage === "dashboard" && (
        <Dashboard onLoginClick={handleLogin}
         onOpenInternship={handleOpenInternship}
          onOpenHackathon={handleOpenHackathon} />
      )}

      {currentPage === "login" && <Login onBack={handleBackToDashboard} />}
      {currentPage === "internship" && <InternshipPage />}
      {currentPage === "hackathon" && (
        <HackathonPage onBack={handleBackToDashboard} />
      )}


    </div>
  );
};

export default App;
