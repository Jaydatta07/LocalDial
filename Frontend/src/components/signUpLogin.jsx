import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styles from './loginSignup.module.css';  // Import as CSS Module

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); 
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (isLogin) {
        // Login API
        const response = await axios.post("/api/users/login", {
          email: formData.email,
          password: formData.password,
        });
        setMessage(`Login Successful! Welcome back, ${response.data.user.name}`);
        alert("login successfully")
            // Navigate to the dashboard only after successful login/signup
      if (response?.data?.user) {
        navigate('/dashboard');
      }
      } else {
        // Signup API
        const response = await axios.post("/api/users/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setMessage(`Signup Successful! Welcome, ${response.data.user.name}`);
            // Navigate to the dashboard only after successful login/signup
      if (response?.data?.user) {
        navigate('/dashboard');
      }
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${isLogin ? styles.login : styles.signup}`}>
        <h1>{isLogin ? "Login" : "Signup"}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
              />
            </div>
          )}
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className={styles.btn}>
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <button
          className={styles.toggleBtn}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Switch to Signup" : "Switch to Login"}
        </button>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default LoginSignupPage;
