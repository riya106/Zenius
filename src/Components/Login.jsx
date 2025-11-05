import React, { useState } from "react";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black bg-cover bg-center relative">
      {/* Optional subtle background image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40"
      ></div>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Main Card */}
      <div className="relative w-[430px] bg-black/70 border border-purple-700 p-8 rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.5)]">
        {/* Header Switch */}
        <div className="flex justify-center mb-4 relative">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
            {isLoginMode ? "Login" : "Sign Up"}
          </h2>
        </div>

        {/* Toggle Buttons */}
        <div className="relative flex h-12 mb-4 border border-gray-700 rounded-full overflow-hidden">
          <button
            onClick={() => setIsLoginMode(true)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLoginMode ? "text-white" : "text-gray-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginMode(false)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLoginMode ? "text-white" : "text-gray-400"
            }`}
          >
            Sign Up
          </button>

          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 ${
              isLoginMode ? "left-0" : "left-1/2"
            }`}
          ></div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-3 bg-transparent border border-gray-600 text-white outline-none focus:border-purple-500 placeholder-gray-400 rounded-full"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 bg-transparent border border-gray-600 text-white outline-none focus:border-purple-500 placeholder-gray-400 rounded-full"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 bg-transparent border border-gray-600 text-white outline-none focus:border-purple-500 placeholder-gray-400 rounded-full"
          />

          {!isLoginMode && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 bg-transparent border border-gray-600 text-white outline-none focus:border-purple-500 placeholder-gray-400 rounded-full"
            />
          )}

          {isLoginMode && (
            <div className="text-right">
              <p className="text-purple-400 hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
          )}

          <button className="w-full p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
            {isLoginMode ? "Login" : "Sign Up"}
          </button>

          <p className="text-center text-gray-400">
            {isLoginMode ? "Don’t have an account?" : "Already have an account?"}{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLoginMode);
              }}
              className="text-purple-400 hover:underline"
            >
              {isLoginMode ? "Sign up now" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
