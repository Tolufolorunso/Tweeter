import React from 'react';
import HomeWrapper from './home.styled';
import Trend from './Trend';
import TweetBox from './TweetBox';

const Home = () => {
  return (
    <HomeWrapper>
      <div className="container">
        <div className="home">
          <div className="home__main">
            <TweetBox />
          </div>
          <aside className="home__aside">
            <Trend />
          </aside>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
