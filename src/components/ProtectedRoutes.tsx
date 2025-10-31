// src/components/ProtectedRoutes.tsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Assuming you put useAuth in 'src/hooks/useAuth.ts'

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({ redirectPath = '/login', children }) => {
  const { currentUser, loading } = useAuth();

  // 1. Handle loading state while Firebase checks authentication
  if (loading) {
    // You can replace this with a proper loading spinner/screen
    return <div>Authenticating...</div>; 
  }

  // 2. Check if the user is logged in
  if (!currentUser) {
    // Redirect them to the login page if not logged in
    return <Navigate to={redirectPath} replace />;
  }

  // 3. Render the child component (Outlet) if authenticated
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoutes;