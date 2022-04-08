import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { auth } from "../firebase/server";

import { AuthContext } from "./AuthProvider";

const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        navigate("/chat");
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, [user, location]);

  const value = { user, error, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
