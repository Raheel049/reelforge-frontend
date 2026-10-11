import api from "../../api/client";
import React, { useState } from "react";
import styles from "./signUp.module.css";
import { Loader } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const inputValue = (e) => {
    const activeField = e.target.name;
    const value = e.target.value;

    setUser((preUser) => ({
      ...preUser,
      [activeField]: value,
    }));
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      setIsLoading(true);
      const response = await api.post("/auth/signup", user);
      if (response?.data?.status || response.data.message === 200) {
        navigate("/login");
      }
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        "Invalid credentials or server not responding!";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glow} />
      {isLoading && (
        <Loader fullScreen={"true"} text="Verifying credentials..." />
      )}
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <div className={styles.brandIcon}>⚡</div>
            <span>
              Reel<span className={styles.brandAccent}>Forge</span>
            </span>
          </div>
          <p className={styles.subtitle}>
            Welcome back! Please enter your details.
          </p>
        </div>

        {errorMessage && (
          <div className={styles.errorBanner}>{errorMessage}</div>
        )}

        <form onSubmit={signUpHandler} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Raheel Ahmed"
                className={styles.input}
                value={user.name}
                onChange={inputValue}
                name="name"
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Phone Number</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="0305-0000000"
                value={user.phoneNumber}
                onChange={inputValue}
                className={styles.input}
                name="phoneNumber"
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                placeholder="raheel@gmail.com"
                className={styles.input}
                value={user.email}
                onChange={inputValue}
                name="email"
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                className={styles.input}
                value={user.password}
                onChange={inputValue}
                name="password"
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className={styles.togglePassBtn}
              >
                {showPassword ? "HIDE" : "SHOW"}
                
              </button>
            </div>
          </div>

          <div className={styles.extraRow}>
            <Link to="/forgot-password" className={styles.link}>
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isLoading}
          >
            {isLoading
              ? `<Loader fullScreen={"true"} text='Sign Up... />`
              : "Sign Up"}
          </button>
        </form>
        <div className={styles.footer}>
          <span>Do you have an already Account?</span>
          <Link to="/login" className={styles.footerLink}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
