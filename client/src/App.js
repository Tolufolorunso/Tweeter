import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, NotFound, Profile } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
