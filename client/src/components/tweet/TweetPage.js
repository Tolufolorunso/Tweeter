import React from 'react'
import { useParams } from 'react-router-dom';

const TweetPage = (props) => {
    let { tweetId,username } = useParams();
    console.log(tweetId,username)
  return (
    <div>TweetPage</div>
  )
}

export default TweetPage