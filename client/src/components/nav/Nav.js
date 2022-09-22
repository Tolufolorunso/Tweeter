import { Link, NavLink } from 'react-router-dom';

import NavWrapper from './nav.styled';
import Logo from '../../assets/images/tweeter.svg';
import LogoMobile from '../../assets/images/tweeter-small.svg';

const Nav = () => {
  return (
    <NavWrapper>
      <div className="nav-container">
        <div className="nav__wrapper">
          <div className="nav__logo">
            <Link>
              <img src={Logo} alt="tweeter logo" className="nav__logo-web" />
              <img
                src={LogoMobile}
                alt="tweeter logo"
                className="nav__logo-mobile"
              />
            </Link>
          </div>
          <div className="nav__links fs-300 fw-semi-bold">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/explore">Explore</NavLink>
              </li>
              <li>
                <NavLink to="/bookmarks">Bookmarks</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav__profile fs-300 fw-semi-bold">
            <img src="" alt="" />
            <span>tolulope</span>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
