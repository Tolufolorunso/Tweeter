import React from 'react';
import TweetWrapper from './tweet.styled';
// import AvaterImage from '../../assets/images/landingpageimage.png';
// import TweetHeader from './TweetHeader';
import Text from '../Text';
// import TweetInfo from './TweetInfo';
// import TweetActions from './TweetActions';
// import ReplyToTweet from './ReplyToTweet';
// import Replies from './Replies';

import {
  Replies,
  ReplyToTweet,
  TweetActions,
  TweetHeader,
  TweetInfo,
} from './';

const tweetTextStyle = {
  marginBlock: '1.25rem',
  fontWeigth: 400,
  lineHeight: '21.79px',
  color: '#4F4F4F',
};

const Tweet = ({ tweet: { tweetText, userImg, tweetImg, ...others } }) => {
  return (
    <TweetWrapper className="mb-2">
      <TweetHeader AvaterImage={userImg} />
      {tweetText && <Text title={tweetText} style={tweetTextStyle} tag="p" />}
      {tweetImg && (
        <div className="imageWrapper">
          <img src={tweetImg} alt={tweetText.substring(0, 10)} />
        </div>
      )}
      <TweetInfo others={others} />
      <TweetActions others={others} />
      <ReplyToTweet />
      <div className="line"></div>
      <Replies />
    </TweetWrapper>
  );
};

export default Tweet;
