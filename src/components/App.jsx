// import { ContactsList } from './Contacts/ContactsList';
// import { ContactForm } from './Form/ContactForm';
// import { Filter } from './Filter/Filter';

import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/homePage/homePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPages/LoginPages'));
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
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );

  // <div
  //   style={{
  //     width: '500px',
  //     marginLeft: 'auto',
  //     marginRight: 'auto',
  //     marginTop: '50px',
  //     border: '1px dashed orange',
  //     backgroundColor: '#fffcf9',
  //   }}
  // >
  //   <h1 style={{ textAlign: 'center' }}>PhoneBook</h1>

  //   <ContactForm />

  //   <h2 style={{ textAlign: 'center' }}>Contacts</h2>

  //   <Filter />
  //   <ContactsList />
  // </div>
};
export default App;
