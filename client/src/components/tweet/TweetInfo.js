import React from 'react';

const TweetInfo = ({ others: { comments, likes, retweet } }) => {
  // console.log(comments, likes);
  // console.log(comments.length);
  return (
    <div className="tweetInfo mx">
      <ul>
        <li>
          {comments.length} {comments.length > 1 ? 'comments' : 'comment'}
        </li>
        <li>
          {retweet.length} {retweet.length > 1 ? 'retweets' : 'retweet'}
        </li>
        <li>235 saved</li>
      </ul>
    </div>
  );
};

export default TweetInfo;
