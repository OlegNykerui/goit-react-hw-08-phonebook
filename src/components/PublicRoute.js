import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

export function PublicRoute({ children, restricted = false }) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}
