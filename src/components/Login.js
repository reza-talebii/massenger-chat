import React from "react";
import { GoogleOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to UniChat</h2>

        <div className="login-button google">
          <GoogleOutlined /> Sign In With Google
        </div>
      </div>
    </div>
  );
};

export default Login;
