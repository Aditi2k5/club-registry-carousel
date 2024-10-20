import React, { useState } from 'react';
import './Modal.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Modal = () => {
  const [isExistingUser, setIsExistingUser] = useState(true); // true for login, false for register
  const [email, setEmail] = useState(''); // state to store email input
  const [password, setPassword] = useState(''); // state to store password input
  const [errorMessage, setErrorMessage] = useState(''); // state for error message

  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Regex pattern for the SRM email validation
  const emailPattern = /^[a-z]{2}[0-9]{4}@srmist\.edu\.in$/;

  // Function to handle form submission (login or register)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setErrorMessage('Email must be in the format: xy1234@srmist.edu.in');
    } else {
      setErrorMessage('');
      // On successful login, redirect to the club registry page
      navigate('/clubregistry'); // Programmatically navigate to ClubRegistry.js
    }
  };

  // Toggle between login and register form
  const toggleForm = () => {
    setIsExistingUser(!isExistingUser);
    setErrorMessage(''); // Clear error message when toggling forms
  };

  return (
    <div className="modal-container">
      <div className="modal-intro">
        <h1 className="intro-text">Welcome to ClubHub</h1>
        <p className="intro-subtext">
          Discover amazing student clubs at SRM University. Join clubs, attend events, and grow your network!
        </p>
      </div>

      <div className="modal">
        {isExistingUser ? (
          // Login Form
          <>
            <h2 className="modal-header">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit" className="submit-button">Login</button>
            </form>
            <p className="toggle-text">
              Don't have an account?{' '}
              <button onClick={toggleForm} className="toggle-button">
                Register here
              </button>
            </p>
          </>
        ) : (
          // Register Form
          <>
            <h2 className="modal-header">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit" className="submit-button">Register</button>
            </form>
            <p className="toggle-text">
              Already have an account?{' '}
              <button onClick={toggleForm} className="toggle-button">
                Login here
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
