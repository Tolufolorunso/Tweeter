import React, { useEffect, useState } from "react";
import TweetWrapper from "./tweet.styled";
// import AvaterImage from '../../assets/images/landingpageimage.png';
// import TweetHeader from './TweetHeader';
import Text from "../Text";
// import TweetInfo from './TweetInfo';
// import TweetActions from './TweetActions';
// import ReplyToTweet from './ReplyToTweet';
// import Replies from './Replies';

import DefaultAvater from "../../assets/images/defaultAvater.png";

import {
  Replies,
  ReplyToTweet,
  TweetActions,
  TweetHeader,
  TweetInfo,
} from "./";
import { Link } from "react-router-dom";

const tweetTextStyle = {
  marginBlock: "1.25rem",
  fontWeigth: 400,
  lineHeight: "21.79px",
  color: "#4F4F4F",
};

const Tweet = ({ tweet: { tweetText, userImg, tweetImg, ...others } }) => {
  const [isRetweet, setIsRetweet] = useState(false);
  const [retweetBy, setRetweetBy] = useState("");
  const [retweetText, setRetweetText] = useState("");

  useEffect(() => {
    if (others.retweetData != undefined) {
      console.log(others.retweetData.tweetText);
      setIsRetweet(true);
      setRetweetText(others.retweetData.tweetText);
      setRetweetBy(others.userId.username);
    }
  }, []);

  return (
    <>
      {isRetweet && (
        <p>
          Retweeted by <Link to={`/profile/${retweetBy}`}>@{retweetBy}</Link>
        </p>
      )}
      <TweetWrapper className="mb-2">
        <TweetHeader AvaterImage={userImg} userInfo={others.userId} />
        {isRetweet
          ? retweetText && (
              <Text title={retweetText} style={tweetTextStyle} tag="p" />
            )
          : tweetText && (
              <Text title={tweetText} style={tweetTextStyle} tag="p" />
            )}
        {isRetweet
          ? tweetImg && (
              <div className="imageWrapper">
                <img
                  src={`http://localhost:5000/${tweetImg}`}
                  alt={tweetText.substring(0, 10)}
                />
              </div>
            )
          : tweetImg && (
              <div className="imageWrapper">
                <img
                  src={`http://localhost:5000/${tweetImg}`}
                  alt={tweetText.substring(0, 10)}
                />
              </div>
            )}
        <TweetInfo others={others} />
        <TweetActions others={others} />
        <ReplyToTweet />
        <div className="line"></div>
        <Replies />
      </TweetWrapper>
    </>
  );
};

export default Tweet;
