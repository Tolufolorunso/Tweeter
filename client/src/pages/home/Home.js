import React, { useState } from 'react';
import { Tweet } from '../../components';
import HomeWrapper from './home.styled';
import Trend from './Trend';
import TweetBox from './TweetBox';
// import { tweetData } from './tweetData';
import WhoToFollow from './WhoToFollow';
import { useTweetContext } from '../../context/tweets/tweetContext';
import { useEffect } from 'react';
const token = localStorage.getItem('token');

const Home = () => {
  const { getTweets, tweets } = useTweetContext();
  const [isLoading, setIsLoading] = useState(true);
  const [tweetsArr, setTweetsArr] = useState([]);

  useEffect(() => {
    setTweetsArr(tweets);
  }, [tweets]);

  useEffect(() => {
    if (token) {
      getTweets();
    }
    setIsLoading(false);
    // eslint-disable-next-line
  }, [token]);

  return (
    <HomeWrapper>
      <div className="container">
        <div className="home">
          <div className="home__main">
            <div className="mb-5">
              <TweetBox />
            </div>
            <div className="mb-6 tweets">
              {isLoading ? (
                <div style={{ textAlign: 'center', color: 'green' }}>
                  <h2>Loading</h2>
                </div>
              ) : (
                tweetsArr.map((tweet) => {
                  return <Tweet tweet={tweet} key={tweet._id} />;
                })
              )}
            </div>
          </div>
          <aside className="home__aside">
            <Trend />
            <WhoToFollow />
          </aside>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
