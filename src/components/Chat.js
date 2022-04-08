import React from "react";
import { ChatEngine } from "react-chat-engine";
import { auth } from "firebase";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();

  const handelLogout = async () => {
    await auth().signOut();
    navigate("/");
  };

  return (
    <div className="chats-page">
      <nav className="nav-bar">
        <div className="logo-tab">UniChat</div>
        <div onClick={handelLogout} className="logout-tab">
          Logout
        </div>
      </nav>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="a7cee904-a677-492a-a627-2a240a5d6a12"
        userName=""
        userSecret=""
      />
    </div>
  );
};

export default Chat;
