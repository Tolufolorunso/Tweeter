import styled from 'styled-components';
import Avater from '../Avater';
import Text from '../Text';

const span = {
  fontWeight: 500,
  fontSize: '0.65rem',
  lineHeight: '16px',
  letterSpacing: '-0.035em',
  color: '#BDBDBD',
};

const RepliesList = () => {
  return (
    <div className="user-reply gap-small">
      <Avater />
      <div className="message">
        <div className="flex gap-small">
          <Text
            title="developer_tolu"
            tag="h3"
            style={{ lineHeight: '16px', letterSpacing: '-0.035em' }}
          />
          <Text title="24 August at 20:43" tag="span" style={span} />
        </div>
        <Text title="Coding is easy, don't be deceived" />
      </div>
    </div>
  );
};

const Replies = () => {
  return (
    <Wrapper>
      <RepliesList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .message {
    background-color: #fafafa;
    padding: 10px 1rem;
    border-radius: 8px;
    width: 100%;
  }
  .user-reply {
    display: flex;
  }
`;

export default Replies;
