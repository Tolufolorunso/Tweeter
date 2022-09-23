import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bookmarks, Explore, Home, Landing, NotFound, Profile } from './pages';
import AuthLayout from './pages/AuthLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
