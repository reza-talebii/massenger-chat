import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { auth } from "../firebase/server";

import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      user ? navigate("/chat") : setUser(null);
      setLoading(false);
    });
  }, [user, location.pathname]);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
