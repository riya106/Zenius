import React, { useState, useEffect } from "react";
import { auth } from "./firebase";

import Front from "./Components/Front";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import InternshipPage from "./Components/IntershipPage";
import InternshipDetail from "./Components/InternshipDetail";
import HackathonPage from "./Components/HackathonPage";
import Dsa from "./Components/Dsa";

// Summit Components
import Summits from "./Components/Summits";
import SummitDetail from "./Components/SummitDetail";

function App() {
  const [page, setPage] = useState("front");
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedInternshipId, setSelectedInternshipId] = useState(null);
  const [selectedSummitId, setSelectedSummitId] = useState(null); 

  // Firebase Auth Listener
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* Front Page */}
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

      {/* Login Page */}
      {page === "login" && !user && (
        <Login
          initialMode={authMode}
          onLoginSuccess={() => setPage("dashboard")}
        />
      )}

      {/* Dashboard */}
      {page === "dashboard" && user && (
        <Dashboard
          onOpenInternship={() => setPage("internship")}
          onOpenHackathon={() => setPage("hackathon")}
          onOpenDSA={() => setPage("dsa")}
          onOpenSummits={() => setPage("summits")}
          onLogout={() => auth.signOut()}
        />
      )}

      {/* Internship Page */}
      {page === "internship" && user && (
        <InternshipPage
          onBack={() => setPage("dashboard")}
          onOpenDetail={(id) => {
            setSelectedInternshipId(id);
            setPage("internshipDetail");
          }}
        />
      )}

      {/* Internship Detail Page */}
      {page === "internshipDetail" && user && (
        <InternshipDetail
          internshipId={selectedInternshipId}
          onBack={() => setPage("internship")}
        />
      )}

      {/* Hackathon */}
      {page === "hackathon" && user && (
        <HackathonPage onBack={() => setPage("dashboard")} />
      )}

      {/* DSA */}
      {page === "dsa" && user && <Dsa onBack={() => setPage("dashboard")} />}

      {/* Summits Page */}
      {page === "summits" && user && (
        <Summits
          onBack={() => setPage("dashboard")}
          onOpenSummitDetail={(id) => {      //  FIXED HERE ⭐
            setSelectedSummitId(id);
            setPage("summitDetail");
          }}
        />
      )}

      {/* Summit Detail Page */}
      {page === "summitDetail" && user && (
        <SummitDetail
          summitId={selectedSummitId}
          onBack={() => setPage("summits")}
        />
      )}
    </>
  );
}

export default App;
