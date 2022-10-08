import React from 'react';

const TweetInfo = ({ others: { comments, likes, retweet } }) => {
  // console.log(comments, likes);
  // console.log(comments.length);
  return (
    <div className="tweetInfo mx">
      <ul>
        <li>
          {likes.length} {likes.length > 1 ? 'likes' : 'like'}
        </li>
        <li>
          {retweet.length} {retweet.length > 1 ? 'retweets' : 'retweet'}
        </li>
        <li>
          {comments.length} {comments.length > 1 ? 'comments' : 'comment'}
        </li>
      </ul>
    </div>
  );
};

export default TweetInfo;
