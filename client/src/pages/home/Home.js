import { Tweet } from '../../components';
// import LoadingBar from 'react-top-loading-bar';
import HomeWrapper from './home.styled';
import Trend from './Trend';
import TweetBox from './TweetBox';
// import { tweetData } from './tweetData';
import WhoToFollow from './WhoToFollow';
import { useTweetContext } from '../../context/tweets/tweetContext';
import { useEffect, useState } from 'react';
const user = JSON.parse(localStorage.getItem('user'));

const Home = () => {
  const { getTweets, isLoading, tweets } = useTweetContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTweets(user.username);
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <HomeWrapper>
      <div className="container">
        <div className="home">
          <div className="home__main">
            <div className="mb-5">
              <TweetBox />
            </div>
            <div className="mb-6 tweets">
              {!isLoading || <h1>Hello Loading...</h1>}
              {loading ? (
                <div style={{ textAlign: 'center', color: 'green' }}>
                  <h2>Loading</h2>
                </div>
              ) : (
                tweets.map((tweet) => {
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
