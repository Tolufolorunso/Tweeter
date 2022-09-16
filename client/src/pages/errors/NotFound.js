import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper>
      <div className="container content">
        <h1>404 page</h1>
        <p>
          Hmm...this page doesn’t exist. Try searching for something else.{' '}
          <Link to="/">back home</Link>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
`;

export default NotFound;
