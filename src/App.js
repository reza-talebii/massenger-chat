import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/AuthProvider";

import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
