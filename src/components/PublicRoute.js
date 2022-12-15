import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export function PublicRoute({ children, restricted = false }) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}
