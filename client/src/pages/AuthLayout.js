import { Outlet } from 'react-router-dom';
import { Nav } from '../components';

const AuthLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default AuthLayout;
