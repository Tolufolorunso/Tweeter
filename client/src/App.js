import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Bookmarks, Explore, Home, Landing, NotFound, Profile } from './pages';
import AuthLayout from './pages/AuthLayout';

import { useAuthContext } from './context/auth/authContext';
import { useEffect } from 'react';

function App() {
  const { user, token, getMe } = useAuthContext();

  // useEffect(() => {
  //   getMe();
  //   console.log('app');
  // });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user && token ? <AuthLayout /> : <Navigate to="/landing" />}
        >
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
        <Route
          path="/landing"
          element={!user && !token ? <Landing /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
