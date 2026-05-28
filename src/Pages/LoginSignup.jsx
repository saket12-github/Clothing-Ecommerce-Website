import React from 'react';
import './CSS/LoginSignup.css';

export const LoginSignup = () => {
  return (
    <div className='logInSignUp'>
      <div className="logInSignUp-container">
        <h1>Create Account</h1>
        <p className="logInSignUp-subtitle">Sign up to start shopping</p>

        <div className="logInSignUp-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>

        <button className="logInSignUp-btn">Continue</button>

        <p className='logInSignUp-login'>
          Already have an account? <span>Log in here</span>
        </p>

        <div className="logInSignUp-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            By continuing, I agree to the terms of use &amp; privacy policy.
          </label>
        </div>
      </div>
    </div>
  );
};
