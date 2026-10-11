import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/client';
import Loader from '../../components/loader';
import { useAuth } from '../../context/useAuth';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth(); // AuthContext update karne ke liye

  const loginHandler = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    try {
      setIsLoading(true);
      const response = await api.post('/auth/login', {
        email: email.trim(),
        password: password.trim(),
      });

      if (response.data?.status || response.data?.user) {
        // Global Auth state update karein
        if (login) login(response.data.user);
        navigate('/dashboard');
      } else {
        setErrorMessage(response.data?.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      const msg = error.response?.data?.message || 'Invalid credentials or server not responding.';
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glow} />

      {/* Full screen loader agar request processing par poori screen lock karni ho */}
      {isLoading && <Loader fullScreen={true} text="Verifying credentials..." />}

      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <div className={styles.brandIcon}>⚡</div>
            <span>Reel<span className={styles.brandAccent}>Forge</span></span>
          </div>
          <p className={styles.subtitle}>Welcome back! Please enter your details.</p>
        </div>

        {errorMessage && (
          <div className={styles.errorBanner}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={loginHandler} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                placeholder="name@example.com"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className={styles.togglePassBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
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
            {isLoading ? `<Loader fullScreen={"true"} text='Signing in... />` : 'Sign In'}
          </button>
        </form>

        <div className={styles.footer}>
          <span>Don't have an account?</span>
          <Link to="/signup" className={styles.footerLink}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;