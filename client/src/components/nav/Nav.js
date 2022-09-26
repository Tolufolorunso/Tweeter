import { Link, NavLink } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { MdExplore } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';

import NavWrapper from './nav.styled';
import Logo from '../../assets/images/tweeter.svg';
import LogoMobile from '../../assets/images/tweeter-small.svg';
import AvaterImage from '../../assets/images/landingpageimage.png';
import Avater from '../Avater';

const Nav = () => {
  return (
    <NavWrapper>
      <div className="nav-container">
        <div className="nav__wrapper">
          <div className="nav__logo">
            <Link to="/">
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
                <NavLink end to="/">
                  Home
                </NavLink>
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
            <Avater src={AvaterImage} alt="user avater" />
            <Link to="/profile">
              <span>tolulope</span>
            </Link>
          </div>
        </div>
        <div className="mobile-nav">
          <ul>
            <li>
              <NavLink end to="/">
                <IoMdHome />
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore">
                <MdExplore />
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookmarks">
                <BsFillBookmarkFill />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
