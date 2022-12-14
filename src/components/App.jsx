// import { ContactsList } from './Contacts/ContactsList';
// import { ContactForm } from './Form/ContactForm';
// import { Filter } from './Filter/Filter';

import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Layout = lazy(() => import('../components/Layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>

    // <Suspense fallback={<p>Loading...</p>}>
    //   <Routes>
    //     {/* <Route path="/" redirectTo="/home" element={<Layout />}> */}
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<HomePage />} />
    //       <Route
    //         path="/register"
    //         element={
    //           <RestrictedRoute
    //             redirectTo="/contacts"
    //             component={<RegisterPage />}
    //           />
    //         }
    //       />
    //       <Route
    //         path="/login"
    //         element={
    //           <RestrictedRoute
    //             redirectTo="/contacts"
    //             component={<LoginPage />}
    //           />
    //         }
    //       />
    //       <Route
    //         path="/contacts"
    //         element={
    //           <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
    //         }
    //       />
    //     </Route>
    //   </Routes>
    // </Suspense>
  );
};
export default App;
