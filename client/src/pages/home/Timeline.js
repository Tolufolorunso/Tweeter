import React, { useState } from "react";
import { Tweet } from "../../components";
import { useTweetContext } from "../../context/tweets/tweetContext";
import { useAuthContext } from "../../context/user/userContext";

const Timeline = () => {
  const { getTweets, getTimeline, tweets, isLoading } = useTweetContext();
  // const { user, token } = useAuthContext();
  // const [tweetsArr, setTweetsArr] = useState([]);
  return (
    <div className="mb-6 tweets">
      {isLoading ? (
        <div style={{ textAlign: "center", color: "green" }}>
          <h2>Loading</h2>
        </div>
      ) : (
        tweets.map((tweet) => {
          return <Tweet tweet={tweet} key={tweet._id} />;
        })
      )}
    </div>
  );
};

export default Timeline;
