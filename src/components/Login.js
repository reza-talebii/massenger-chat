import React from "react";
import "firebase/app";
import { GoogleOutlined } from "@ant-design/icons";

import { auth } from "../firebase/server";
import firebase from "firebase/app";

const Login = () => {
  const loginHandler = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to UniChat</h2>

        <div className="login-button google" onClick={loginHandler}>
          <GoogleOutlined /> Sign In With Google
        </div>
      </div>
    </div>
  );
};

export default Login;
