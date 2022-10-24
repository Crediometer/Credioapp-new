import React from "react";
import './MessageSection.css'
import { FiSend } from "react-icons/fi";

export default function MessageSection() {
  return (
    <div>
      <div id="message-section">
        <div id="button-trans">
          <button>Pay</button>
          <button>Request</button>
        </div>
        <form action="" id="message">
          <input type="text" placeholder="Message" />
          <FiSend />
        </form>
      </div>
    </div>
  );
}
