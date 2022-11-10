import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { AiOutlineRetweet } from "react-icons/ai";

const tweetTextStyle = {
  marginBlock: "1.25rem",
  fontWeigth: 400,
  lineHeight: "21.79px",
  color: "#4F4F4F",
};

const Tweet = ({tweet}) => {
  const { tweetText, userImg, tweetImg, ...others } = tweet

  const { postTweet } = useTweetContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();


  const [isRetweet, setIsRetweet] = useState(false);
  const [retweetBy, setRetweetBy] = useState("");
  const [retweetText, setRetweetText] = useState("");
  const [replyImage, setReplyImage] = useState("");
  const [comments, setComments] = useState(tweet.comments)

  // console.log(comments)

  const handleReply = (e) => {
    e.preventDefault();
    postTweet({
      userImg: user.userImg,
      replyBy: "everyone",
      userId: user._id,
      replyTo: others._id,
      image: replyImage,
      tweetText: e.target.replyText.value,
    });
  };

  const handleReplyFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setReplyImage(img);
  };

  const handlePageClick = () => {
    navigate(`/${others.userId.username}/posts/${others._id}`)
  };

  useEffect(() => {
    if (others.retweetData !== undefined) {
      setIsRetweet(true);
      setRetweetText(others.retweetData.tweetText);
      setRetweetBy(others.userId.username);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="hey">
      {isRetweet && (
        <p className="flex f-align-c gap-small ">
          <AiOutlineRetweet className="icons" /> <Link to={`/profile/${retweetBy}`}>@{retweetBy} Retweeted</Link>
        </p>
      )}
      <TweetWrapper className="mb-2" >
        <TweetHeader AvaterImage={userImg} userInfo={others.userId} />
        {isRetweet
          ? retweetText && (
              <Text title={retweetText} style={tweetTextStyle} tag="p" onClick={handlePageClick}/>
            )
          : tweetText && (
              <Text title={tweetText} style={tweetTextStyle} tag="p" onClick={handlePageClick}/>
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
        <ReplyToTweet
          handleReply={handleReply}
          handleReplyFileChange={handleReplyFileChange}
        />
        <div className="line"></div>
        {comments.length >= 1 ? <Replies comments={comments} id={others._id} username={others.userId.username}/> : null }
        
      </TweetWrapper>
    </div>
  );
};

export default Tweet;
