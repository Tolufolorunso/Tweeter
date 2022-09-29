import styled from 'styled-components';

const BookmarksWrapper = styled.main`
  .bookmark {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1.5625rem;
  }

  .bookmark__main {
    flex: 3;
  }

  @media (max-width: 45em) {
    .cover-picture {
      height: 150px;
    }
    .bookmark {
      grid-template-columns: 1fr;
    }
  }
`;

export default BookmarksWrapper;
