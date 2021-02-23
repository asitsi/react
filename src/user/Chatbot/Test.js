import React, { useState } from "react";
import Chatbot from "./Chatbot";
import web from "../../image/chatbot.png";
import "./chatbot.css";

const Test = () => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <div className="bot">
      <div style={{ display: showChat ? "" : "none" }}>
        <Chatbot></Chatbot>
      </div>
      {/* <div> {showChat ? <Chatbot></Chatbot> : null} </div> */}
      <div>
        {!showChat ? (
          <button className="bot_btn" onClick={() => startChat()}>
            <img src={web} alt="chat" className="img" />
          </button>
        ) : (
          <button className="bot_btn" onClick={() => hideChat()}>
            <img src={web} alt="chat" className="img" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Test;
