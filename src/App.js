import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import Home from "./components/home/Home";
import Login from "./components/auth/login";
import Onboard from "./components/onboard";

function App() {
  return (
    <AuthProvider>
      <div className="w-full h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboard" element={<Onboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
