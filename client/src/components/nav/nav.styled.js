import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: var(--clr-neutral-100);
  display: flex;
  align-items: center;
  box-shadow: 0px -2px 3px 3px rgb(0 0 0 / 30%);
  font-family: var(--ff-secondary);
  padding-block: 10px;
  margin-bottom: 1.5rem;
  position: sticky;
  top: 0;
  /* width: 100%; */
  z-index: 100;

  .nav-container {
    width: min(1400px, 100% - 2rem);
    margin-inline: auto;
  }

  .nav__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__logo {
    height: 28.77px;

    img {
      width: 100%;
      object-fit: cover;
      display: inline-block;
      height: 100%;
    }
    .nav__logo-mobile {
      display: none;
    }
  }

  .nav__links ul {
    display: flex;
    list-style: none;
    gap: 3rem;
  }

  .nav__links a {
    color: var(--clr-neutral-900);
    /* font-family: inherit; */
    letter-spacing: -0.035em;
    position: relative;
    transition: all 3s ease;
  }

  .nav__links .active {
    color: var(--clr-primary-400);
  }

  .nav__links a.active::after {
    content: '';
    position: absolute;
    bottom: -14px;
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 40px;
    background-color: var(--clr-primary-400);
  }

  .nav__links a:hover {
    color: var(--clr-primary-400);
  }

  .nav__profile {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .mobile-nav {
    display: none;
  }
  @media (max-width: 45em) {
    .nav__logo {
      .nav__logo-mobile {
        display: block;
      }
      .nav__logo-web {
        display: none;
      }
    }
    .nav__links {
      display: none;
    }

    .mobile-nav {
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding-inline: 4rem;
      padding-block: 8px;
      background-color: white;
    }
    .mobile-nav ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
    }

    .mobile-nav .active {
      color: var(--clr-primary-400);
    }

    .mobile-nav ul a {
      position: relative;
      background-color: transparent;
      color: var(--clr-neutral-800);
      padding: 8px 20px;
      display: flex;
      justify-content: center;
      border-radius: 5px;
      border: none;
    }

    .mobile-nav a.active::after {
      content: '';
      position: absolute;
      bottom: -7px;
      display: block;
      width: 100%;
      height: 2px;
      padding: 0 !important;
      border-radius: 40px;
      background-color: var(--clr-primary-400);
    }

    .mobile-nav a:hover {
      color: var(--clr-primary-400);
      background-color: rgba(0, 0, 0, 0.3);
    }

    .nav__profile span {
      display: none;
    }
  }
`;

export default NavWrapper;
