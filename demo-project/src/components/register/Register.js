import React from "react";
import "./Register.css";

const Register = () => {
    const handleRegister = () => {};

    return (
        <div>
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="social">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                            <a href="#" class="social">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="#" class="social">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                            <a href="#" class="social">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />

                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>

                            <button class="ghost" id="signIn">
                                Sign Up
                            </button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>

                            <button class="ghost" id="signUp">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
