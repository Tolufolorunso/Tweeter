import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { MdGroup } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/auth/authContext';

const NavProfileDropdown = ({ handleDropdown }) => {
  const { logout, user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };
  return (
    <Wrapper onClick={handleDropdown}>
      <div className="link">
        <FaUserCircle />
        <Link to={`/profile/${user.username}`} className="hey">
          My Profile
        </Link>
      </div>
      <div className="link">
        <MdGroup />
        <Link to="/chat">Group Chat</Link>
      </div>
      <div className="link">
        <AiFillSetting />
        <Link to="/setting">Setting</Link>
      </div>
      <div className="line"></div>
      <div className="link">
        <BiLogOut />
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 10.2575rem;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 10px;
  position: absolute;
  right: 50px;
  top: 67px;

  .link {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 5px 10px;
    color: #4f4f4f;
    font-size: var(--fs-12);
    font-weight: 500;
    width: 100%;
    transition: all 0.3s ease-in;
    cursor: pointer;
  }

  .link a,
  .link a:active {
    color: #4f4f4f;
    /* padding: 0 5px; */
    width: 100%;
    transition: all 0.3s ease-in;
  }

  .link svg {
    transition: all 0.3s ease-in;
  }

  .link:hover {
    background: #f2f2f2;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  }

  .link:hover a {
    transform: translateX(2px);
  }
  .link:hover svg {
    transform: scale(1.2);
  }

  .logout-btn {
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

export default NavProfileDropdown;
