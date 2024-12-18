import React, { useState } from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Handle login logic here
      console.log('Login with:', email, password);
    };
  
    const handleSignUp = (e) => {
      e.preventDefault();
      // Handle sign-up logic here
      console.log('Sign up with:', name, email, password);
    };
  
    return (
      <div className="login-container">
        <div className="login-form">
          <div className="left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <Link to="/login"><button className="sign-in-btn" onClick={handleLogin}>Sign In</button></Link>
          </div>
          <div className="right">
            <h2>Create Account</h2>
            <div className="social-buttons">
              <button className="social-btn">G</button>
              <button className="social-btn">f</button>
              <button className="social-btn">In</button>
            </div>
            <p>or use your email for registration</p>
            <form className="sign-up-form" onSubmit={handleSignUp}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="sign-up-btn">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    );
  };



export default SignUp