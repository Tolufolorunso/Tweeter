import styled from 'styled-components';
import { Text } from '../../components';
import { trendings } from './tweetData';

const TrendLists = ({ text, numOfTweets }) => {
  return (
    <div className="popularTweet">
      <p>{text}</p>
      <span>{numOfTweets} tweets</span>
    </div>
  );
};

const Trend = () => {
  return (
    <Wrapper>
      <Text title="Trends for you" tag="h3" style={{ color: '#4F4F4F' }} />
      <div className="line"></div>
      <div className="trends">
        {trendings.map((t) => {
          return (
            <TrendLists
              text={t.trendTitle}
              trendTitle={t.trendTitle}
              key={t.id}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-neutral-100);
  padding: 11px 20px;
  border-radius: 12px;
  font-family: var(--ff-secondary);
  font-size: var(--fs-12);

  .trends {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .popularTweet {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-family: var(--ff-body);

    p {
      font-size: var(--fs-16);
      font-weight: 600;
      color: #333333;
    }

    span {
      color: #828282;
      font-size: var(--fs-12);
      padding-left: 11px;
    }
  }
`;
export default Trend;
