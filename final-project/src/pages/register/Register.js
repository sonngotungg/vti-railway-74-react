import React, { useRef } from "react";

import { registerApi } from "../../apis/accountApi";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleRegister = async () => {
    try {
      const newUserData = {
        username: usernameRef.current.value,
        passwordRef: passwordRef.current.value
      }

      await registerApi(newUserData)
      navigate('/')
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div className="Register">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <input ref={usernameRef} placeholder="Username/Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button onClick={handleRegister}>Sign Up</button>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;