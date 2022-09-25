import React from 'react';
import { Tweet } from '../../components';
import HomeWrapper from './home.styled';
import Trend from './Trend';
import TweetBox from './TweetBox';
import { tweetData } from './tweetData';

const Home = () => {
  return (
    <HomeWrapper>
      <div className="container">
        <div className="home">
          <div className="home__main">
            <div className="mb-5">
              <TweetBox />
            </div>
            <div className="mb-6 tweets">
              {tweetData.map((tweet) => {
                return <Tweet tweet={tweet} key={tweet.id} />;
              })}
            </div>
          </div>
          <aside className="home__aside">
            <Trend />
            {/* <Trend /> */}
          </aside>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
