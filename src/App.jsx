import React, { useState, useEffect } from "react";
import { auth } from "./firebase";

import Front from "./Components/Front";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import InternshipPage from "./Components/IntershipPage";
import HackathonPage from "./Components/HackathonPage";
import Dsa from "./Components/Dsa";
import Summits from "./Components/Summits";

function App() {
  const [page, setPage] = useState("front");
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Firebase Auth Listener (VERY IMPORTANT)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        setPage("dashboard"); // auto redirect when logged in
      } else {
        setPage("front"); // auto redirect when logged out
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
      {page === "front" && !user && (
        <Front
          onGetStarted={() => setPage("login")} // 🔥 fixed: now goes to login
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

      {page === "login" && !user && (
        <Login
          initialMode={authMode}
          onLoginSuccess={() => setPage("dashboard")}
        />
      )}

      {page === "dashboard" && user && (
        <Dashboard
          onOpenInternship={() => setPage("internship")}
          onOpenHackathon={() => setPage("hackathon")}
          onOpenDSA={() => setPage("dsa")}
          onOpenSummits={() => setPage("summits")}
          onLogout={() => auth.signOut()} // 🔥 Direct Firebase logout
        />
      )}

      {page === "internship" && user && (
        <InternshipPage onBack={() => setPage("dashboard")} />
      )}

      {page === "hackathon" && user && (
        <HackathonPage onBack={() => setPage("dashboard")} />
      )}

      {page === "dsa" && user && <Dsa onBack={() => setPage("dashboard")} />}

      {page === "summits" && user && (
        <Summits onBack={() => setPage("dashboard")} />
      )}
    </>
  );
}

export default App;



