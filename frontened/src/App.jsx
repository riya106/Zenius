import React, { useState, useEffect } from "react";
import { auth } from "./firebase";

import Front from "./Components/Front";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import InternshipPage from "./Components/IntershipPage";
import InternshipDetail from "./Components/InternshipDetail";
import HackathonPage from "./Components/HackathonPage";
import Dsa from "./Components/Dsa";
import Summits from "./Components/Summits";
import SummitDetail from "./Components/SummitDetail";

function App() {
  const [page, setPage] = useState(null);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedInternshipId, setSelectedInternshipId] = useState(null);
  const [selectedSummitId, setSelectedSummitId] = useState(null);

  // 🔐 Firebase Auth Listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        setPage("dashboard");
      } else {
        setPage("front");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ⛔ Loading Screen
  if (loading || page === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f0fdfa] to-[#e0f2fe] text-gray-700 text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdfa] to-[#e0f2fe] text-gray-800">
      
      {/* FRONT */}
      {page === "front" && !user && (
        <Front
          onGetStarted={() => setPage("login")}
          onLoginClick={() => {
            setAuthMode("login");
            setPage("login");
          }}
          onSignupClick={() => {
            setAuthMode("signup");
            setPage("login");
          }}
        />
      )}

      {/* LOGIN */}
      {page === "login" && !user && (
        <Login
          initialMode={authMode}
          onLoginSuccess={() => setPage("dashboard")}
        />
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && user && (
        <Dashboard
          onOpenInternship={() => setPage("internship")}
          onOpenHackathon={() => setPage("hackathon")}
          onOpenDSA={() => setPage("dsa")}
          onOpenSummits={() => setPage("summits")}
          onLogout={() => {
            auth.signOut();
            setPage("front");
          }}
        />
      )}

      {/* INTERNSHIPS */}
      {page === "internship" && user && (
        <InternshipPage
          onBack={() => setPage("dashboard")}
          onOpenDetail={(id) => {
            setSelectedInternshipId(id);
            setPage("internshipDetail");
          }}
        />
      )}

      {/* INTERNSHIP DETAIL */}
      {page === "internshipDetail" && user && (
        <InternshipDetail
          internshipId={selectedInternshipId}
          onBack={() => setPage("internship")}
        />
      )}

      {/* HACKATHONS */}
      {page === "hackathon" && user && (
        <HackathonPage onBack={() => setPage("dashboard")} />
      )}

      {/* DSA */}
      {page === "dsa" && user && (
        <Dsa onBack={() => setPage("dashboard")} />
      )}

      {/* SUMMITS */}
      {page === "summits" && user && (
        <Summits
          onBack={() => setPage("dashboard")}
          onOpenSummitDetail={(id) => {
            setSelectedSummitId(id);
            setPage("summitDetail");
          }}
        />
      )}

      {/* SUMMIT DETAIL */}
      {page === "summitDetail" && user && (
        <SummitDetail
          summitId={selectedSummitId}
          onBack={() => setPage("summits")}
        />
      )}
    </div>
  );
}

export default App;
