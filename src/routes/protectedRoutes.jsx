// src/routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Show a clean full-screen loader while checking session cookies
    return (
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', background: '#030712', color: '#c084fc' }}>
        <span>Loading ReelForge Studio...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Pass the current location to redirect back after logging in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}