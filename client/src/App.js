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
import { TweetPage } from './components';
// import Confirm from './components/Confirm';

function App() {
  const { user, token } = useAuthContext();

  return (
    <>
      <Toast />
      {/* <Confirm heading="Delete Tweet" title="Are you sure you want to delete tweet" action="Delete" /> */}
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
            <Route path="/:username/posts/:tweetId" element={<TweetPage />} />
          </Route>
          <Route
            path="/landing"
            element={!user && !token ? <Landing /> : <Navigate to="/" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Confirm heading="Delete Tweet" title="Are you sure you want to delete tweet" action="Delete" /> */}
    </>
  );
}

export default App;
