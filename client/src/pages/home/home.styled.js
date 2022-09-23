import styled from 'styled-components';

const HomeWrapper = styled.main`
  .home {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1.5625rem;
  }

  .home__main {
    /* max-width: 46.5625rem; */
  }

  .home__aside {
    /* max-width: 19.125rem; */
    background-color: white;
  }
`;

export default HomeWrapper;
