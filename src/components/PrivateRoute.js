import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}
