import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { AuthProvider } from "../contexts/AuthContext"

// import Chats from "./Chats"
import Login from "./Login";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
