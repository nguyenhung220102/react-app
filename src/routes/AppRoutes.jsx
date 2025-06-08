import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from '../pages/SignIn/SignInPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import DashboardPage from '../pages/Dashboard/DashboardPage';

export default function AppRoutes() {
  return (
    <Routes>
        <Route
          path="/signin"
          element={  <SignInPage />}
        />
        <Route
          path="/signup"
          element={  <SignUpPage />}
        />
        <Route
          path="/dashboard"
          element={ <DashboardPage /> }
        />
        {/* Redirect to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}