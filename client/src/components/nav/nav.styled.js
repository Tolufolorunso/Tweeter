import styled from 'styled-components';

const NavWrapper = styled.nav`
  /* background-color: aqua; */
  height: 68.31px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  font-family: var(--ff-secondary);

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
    .nav__logo-mobile {
      display: none;
    }
  }

  .nav__links ul {
    display: flex;
    list-style: none;
    gap: 10px;
  }

  .nav__links a {
    color: var(--clr-neutral-900);
    font-family: inherit;
    line-height: 21px;
    letter-spacing: -0.035em;
  }

  @media (max-width: 23.4375em) {
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
  }
`;

export default NavWrapper;
