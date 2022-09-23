import styled from 'styled-components';
import { Text } from '../../components';

const TweetBox = () => {
  return (
    <Wrapper>
      <Text title="Tweet something" tag="h3" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-neutral-100);
`;

export default TweetBox;
