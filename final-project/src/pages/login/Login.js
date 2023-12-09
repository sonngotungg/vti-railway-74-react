import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'

import { loginAsync } from "../../redux-toolkit/slices/accountSlice";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch()

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = () => {
    const userData = {
      username: usernameRef.current.value,
      passwordRef: passwordRef.current.value
    }

    dispatch(loginAsync(userData))
  }

  const isAuthenticated = localStorage.getItem('access-token')

  if (isAuthenticated) {
    return <Navigate to='/' replace />
  }
  console.log('first')
  return (
    <div className="Login">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <h1>Sign In</h1>
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
          <span>or use your account</span>
          <input ref={usernameRef} placeholder="Username/Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button onClick={handleLogin}>Sign In</button>
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

export default Login;