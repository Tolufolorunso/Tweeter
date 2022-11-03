import { Tweet } from "../../components";
// import LoadingBar from 'react-top-loading-bar';
import HomeWrapper from "./home.styled";
import Trend from "./Trend";
import TweetBox from "./TweetBox";
// import { tweetData } from './tweetData';
import WhoToFollow from "./WhoToFollow";
import { useTweetContext } from "../../context/tweets/tweetContext";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/user/userContext";
import Timeline from "./Timeline";
const user = JSON.parse(localStorage.getItem("user"));

const Home = () => {
  const { getTimeline } = useTweetContext();
  const { user, token } = useAuthContext();


  useEffect(() => {
    getTimeline();
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
            <Timeline />
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
