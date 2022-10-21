import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  Bookmarks,
  EditProfile,
  Explore,
  Home,
  Landing,
  NotFound,
  Profile,
} from './pages';
import AuthLayout from './pages/AuthLayout';

import { useAuthContext } from './context/user/userContext';
import Toast from './components/Toast';

function App() {
  const { user, token } = useAuthContext();

  return (
    <>
      <Toast />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user && token ? <AuthLayout /> : <Navigate to="/landing" />
            }
          >
            <Route index element={<Home />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/profile/:username/edit" element={<EditProfile />} />
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
    </>
  );
}

export default App;
