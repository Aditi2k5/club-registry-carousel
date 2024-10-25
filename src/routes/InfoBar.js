import React, { useState } from 'react';
import './InfoBar.css';

const InfoBar = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    "Welcome to our website!",
    "Check out our latest events",
    "Follow us on social media",
    "Join our community today"
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message.trim()]);
      setMessage('');
    }
  };

  return (
    <div className="info-bar-container">
      <div className="marquee">
        <div className="marquee-content">
          {messages.map((text, index) => (
            <span key={index} className="marquee-item">{text} ★ </span>
          ))}
        </div>
        <div className="marquee-content">
          {messages.map((text, index) => (
            <span key={index} className="marquee-item">{text} ★ </span>
          ))}
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Add new message..."
          className="message-input"
        />
        <button type="submit" className="submit-button">
          Add Message
        </button>
      </form>
    </div>
  );
};

export default InfoBar;