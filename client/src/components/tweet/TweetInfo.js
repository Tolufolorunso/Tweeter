import React from 'react';

const TweetInfo = ({ others: { comments, likes, retweetUser } }) => {
  return (
    <div className="tweetInfo mx">
      <ul>
        <li style={{width: '8ch'}}>
          {likes.length} {likes.length > 1 ? 'likes' : 'like'}
        </li>
        <li style={{width: '13ch'}}>
          {retweetUser.length} {retweetUser.length > 1 ? 'retweets' : 'retweet'}
        </li>
        <li>
          {comments.length} {comments.length > 1 ? 'comments' : 'comment'}
        </li>
      </ul>
    </div>
  );
};

export default TweetInfo;
