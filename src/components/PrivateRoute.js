import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const shouldRedirect = !isLoggedIn && !isRefreshing;
//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };

export function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}
