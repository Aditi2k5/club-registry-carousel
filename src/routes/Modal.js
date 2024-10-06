import React, { useState } from 'react';
import './Modal.css'; // Custom CSS for styling

const Modal = ({ isOpen, onClose }) => {
  const [isUser, setIsUser] = useState(true); // Toggle between user/admin
  const [isLogin, setIsLogin] = useState(true); // Toggle between login/register

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>×</button>

        {/* Tab Buttons to switch between User and Admin */}
        <div className="tab-buttons">
          <button
            className={isUser ? 'active' : ''}
            onClick={() => setIsUser(true)}
          >
            User
          </button>
          <button
            className={!isUser ? 'active' : ''}
            onClick={() => setIsUser(false)}
          >
            Admin
          </button>
        </div>

        {/* Conditionally render the forms */}
        <div className="modal-content">
          {isUser ? (
            isLogin ? (
              <UserLoginForm setIsLogin={setIsLogin} />
            ) : (
              <UserRegisterForm setIsLogin={setIsLogin} />
            )
          ) : isLogin ? (
            <AdminLoginForm setIsLogin={setIsLogin} />
          ) : (
            <AdminRegisterForm setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

const UserLoginForm = ({setIsLogin}) => (
  <div className="form-container">
    <h2>User Login</h2>
    <form>
      Email: <input type="email" placeholder="Eg: xy12345@srmist.edu.in" required />
      <br></br>
      Password: <input type="password" placeholder="Password" required />
      <br></br>
      <button type="submit">Login</button>
      <p>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}><br></br>
      Register Here</a></p>
    </form>
  </div>
);

const UserRegisterForm = ({setIsLogin}) => (
  <div className="form-container">
    <h2>User Register</h2>
    <form>
      Email: <input type="email" placeholder="Email" required />
      <br></br>
      Password: <input type="password" placeholder="Password" required />
      <br></br>
      <button type='submit'>Register</button>
      <p>
        Already have an account?{' '}
        <a href="#" onClick={() => setIsLogin(true)}><br></br>
          Login Here
        </a>
      </p>
      
    </form>
  </div>
);

const AdminLoginForm = ({setIsLogin}) => (
  <div className="form-container">
    <h2>Admin Login</h2>
    <form>
      Email: <input type="email" placeholder="Admin Username" required />
      <br></br>
      Password: <input type="password" placeholder="Password" required />
      <br></br>
      <button type="submit">Login</button>
      <p>
      Don't have an account?{' '}
        <a href="#" onClick={() => setIsLogin(false)}><br></br>
          Register Here
      </a></p>
    </form>
  </div>
);

const AdminRegisterForm = ({setIsLogin}) => (
  <div className="form-container">
    <h2>Admin Register</h2>
    <form>
      Email: <input type="email" placeholder="Admin Email" required />
      <br></br>
      Password: <input type="password" placeholder="Password" required />
      <br></br>
      <button type='submit'>Register</button>
      <p>
      Already have an account?{' '}
        <a href="#" onClick={() => setIsLogin(true)}><br></br>
          Login Here
        </a>
      </p>
    </form>
  </div>
);

export default Modal;
