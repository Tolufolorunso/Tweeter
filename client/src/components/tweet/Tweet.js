import React, { useEffect, useState } from "react";
import TweetWrapper from "./tweet.styled";
// import AvaterImage from '../../assets/images/landingpageimage.png';
// import TweetHeader from './TweetHeader';
import Text from "../Text";
// import TweetInfo from './TweetInfo';
// import TweetActions from './TweetActions';
// import ReplyToTweet from './ReplyToTweet';
// import Replies from './Replies';

// import DefaultAvater from "../../assets/images/defaultAvater.png";

import {
  Replies,
  ReplyToTweet,
  TweetActions,
  TweetHeader,
  TweetInfo,
} from "./";
import { Link } from "react-router-dom";
import { useTweetContext } from "../../context/tweets/tweetContext";
import { useAuthContext } from "../../context/user/userContext";

const tweetTextStyle = {
  marginBlock: "1.25rem",
  fontWeigth: 400,
  lineHeight: "21.79px",
  color: "#4F4F4F",
};

const Tweet = ({ tweet: { tweetText, userImg, tweetImg,_id: tweetId, ...others } }) => {
  const { postTweet } = useTweetContext();
  const { user } = useAuthContext();

  const [isRetweet, setIsRetweet] = useState(false);
  const [retweetBy, setRetweetBy] = useState("");
  const [retweetText, setRetweetText] = useState("");
  const [replyImage, setReplyImage] = useState('');


  const handleReply = (e) => {
    
    e.preventDefault()
    postTweet({
      userImg: user.userImg,
      replyBy: 'everyone',
      userId: user._id,
      replyTo: tweetId,
      image: replyImage,
      tweetText: e.target.replyText.value,
    })
  }

  const handleReplyFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setReplyImage(img);
  };

  useEffect(() => {
    if (others.retweetData !== undefined) {
      console.log(others.retweetData.tweetText);
      setIsRetweet(true);
      setRetweetText(others.retweetData.tweetText);
      setRetweetBy(others.userId.username);
    }
    // eslint-disable-next-line
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
        <ReplyToTweet handleReply={handleReply} handleReplyFileChange={handleReplyFileChange} />
        <div className="line"></div>
        <Replies />
      </TweetWrapper>
    </>
  );
};

export default Tweet;
