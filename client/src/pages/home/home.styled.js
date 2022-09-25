import styled from 'styled-components';

const HomeWrapper = styled.main`
  .home {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1.5625rem;
  }

  .home__main {
    /* margin-bottom: ; */
  }

  @media (max-width: 45em) {
    .home {
      grid-template-columns: 1fr;
    }
    .home__aside {
      display: none;
    }
  }
`;

export default HomeWrapper;
