import React, { useState } from 'react';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-semibold text-center">
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>
      </div>

      <div className="relative flex h-12 mb-4 border border-gray-300 rounded-full overflow-hidden">
        <button
          onClick={() => setIsLoginMode(true)}
          className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLoginMode(false)}
          className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}
        >
          Sign Up
        </button>

        <div
          className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all duration-300 ${
            isLoginMode ? "left-0" : "left-1/2"
          }`}
        ></div>
      </div>

      <form className="space-y-4">
        {!isLoginMode && (
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-3 border border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500 rounded-full"
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-3 border border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500 rounded-full"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 border border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500 rounded-full"
        />

        {!isLoginMode && (
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="w-full p-3 border border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500 rounded-full"
          />
        )}

        {isLoginMode && (
          <div className="text-right">
            <p className="text-cyan-600 hover:underline">Forgot Password?</p>
          </div>
        )}

        <button className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
          {isLoginMode ? "Login" : "Sign Up"}
        </button>

        <p className="text-center text-gray-600">
          {isLoginMode ? "Don’t have an account?" : "Already have an account?"}{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsLoginMode(!isLoginMode);
            }}
            className="text-cyan-600 hover:underline"
          >
            {isLoginMode ? "Sign up now" : "Login"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;

