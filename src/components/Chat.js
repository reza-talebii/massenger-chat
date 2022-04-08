import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ChatEngine } from "react-chat-engine";
import { auth } from "firebase";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../context/AuthContext";
import Alert from "./Alert";

const Chat = () => {
  const { user } = useContext(useAuth);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handelLogout = async () => {
    await auth().signOut();
    navigate("/");
  };

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    if (!user || user === null) {
      navigate("/");
      return;
    }

    // Get-or-Create should be in a Firebase Function
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": "a7cee904-a677-492a-a627-2a240a5d6a12",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })

      .then(() => setLoading(false))

      .catch((e) => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "dca3c4d3-9bd9-48bb-9d8d-b1d7fd822b66",
              },
            })
            .then(() => setLoading(false))
            .catch((e) => setError(e.response));
        });
      });
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  }, [user, location.pathname]);

  if (loading || error || !user)
    return <Alert message={!error && "Loading..."} />;

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
        projectID="a7cee904-a677-492a-a627-2a240a5d6a12"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chat;
