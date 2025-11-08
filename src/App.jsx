import React, { useState } from "react";
import Front from "./Components/Front";
import Dashboard from "./Components/Dashboard";
import InternshipPage from "./Components/IntershipPage";
import HackathonPage from "./Components/HackathonPage";
import Dsa from "./Components/Dsa";
import Summits from "./Components/Summits";

function App() {
  const [page, setPage] = useState("front");

  return (
    <>
    {page === "front" && <Front onGetStarted={() => setPage("dashboard")} />}


      {page === "dashboard" && (
        <Dashboard
          onOpenInternship={() => setPage("internship")}
          onOpenHackathon={() => setPage("hackathon")}
          onOpenDSA={() => setPage("dsa")}
          onOpenSummits={() => setPage("summits")}
        />
      )}

      {page === "internship" && (
        <InternshipPage onBack={() => setPage("dashboard")} />
      )}

      {page === "hackathon" && (
        <HackathonPage onBack={() => setPage("dashboard")} />
      )}

      {page === "dsa" && <Dsa onBack={() => setPage("dashboard")} />}

      {page === "summits" && <Summits onBack={() => setPage("dashboard")} />}
    </>
  );
}

export default App;
