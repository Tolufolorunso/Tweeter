import React from 'react';
import HomeWrapper from './home.styled';
import TweetBox from './TweetBox';

const Home = () => {
  return (
    <HomeWrapper>
      <div className="container">
        <div className="home">
          <div className="home__main">
            <TweetBox />
          </div>
          <aside className="home__aside"></aside>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
