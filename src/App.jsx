import React, { useState } from "react";
import Front from "./Components/Front";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

const App = () => {
  const [currentPage, setCurrentPage] = useState("front");

  const handleGetStarted = () => setCurrentPage("dashboard");
  const handleLogin = () => setCurrentPage("login");
  const handleBackToDashboard = () => setCurrentPage("dashboard");

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black text-white">
      {currentPage === "front" && <Front onGetStarted={handleGetStarted} />}

      {currentPage === "dashboard" && (
        <Dashboard onLoginClick={handleLogin} />
      )}

      {currentPage === "login" && <Login onBack={handleBackToDashboard} />}
    </div>
  );
};

export default App;
