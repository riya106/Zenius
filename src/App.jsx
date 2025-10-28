import React, { useState } from 'react';
import Login from './Components/Login';
import Front from './Components/Front';

const App = () => {
  const [showLogin, setShowLogin] = useState(false); // Track which page to show

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black text-white">
      {showLogin ? (
        <Login /> // show Login when button clicked
      ) : (
        <Front onGetStarted={() => setShowLogin(true)} /> // show Front by default
      )}
    </div>
  );
};

export default App;

