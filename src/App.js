import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./components/Chats";
import Login from "./components/Login";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
