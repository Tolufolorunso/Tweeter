import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Trend from "../../pages/home/Trend";
import Tweet from "./Tweet";

const tweet = {
  "_id": "636d39302e4bbfe50ea0d455",
  "tweetText": "DevTools failed to load source map: Could not load content for",
  "userImg": "null",
  "userId": {
      "_id": "636d312babf4525cf38bfb2e",
      "name": "folorunso tolulope",
      "username": "tolufolorunso",
      "email": "tolu@yahoo.com",
      "dateOfBirth": "2006-01-19T23:00:00.000Z",
      "likes": [],
      "retweets": [],
      "followers": [],
      "following": [],
      "savedTweet": [],
      "userImg": null,
      "coverImg": null,
      "isAdmin": false,
      "bio": "",
      "createdAt": "2022-11-10T17:13:15.056Z",
      "updatedAt": "2022-11-10T17:13:15.056Z",
      "__v": 0
  },
  "replyBy": "everyone",
  "likes": [],
  "comments": [
      {
          "_id": "636d39502e4bbfe50ea0d45a",
          "tweetText": "Upload atleast one image or enter tweet",
          "userImg": "null",
          "userId": "636d312babf4525cf38bfb2e",
          "replyBy": "everyone",
          "likes": [],
          "comments": [],
          "retweetUser": [],
          "replyTo": "636d39302e4bbfe50ea0d455",
          "saved": [],
          "createdAt": "2022-11-10T17:48:00.334Z",
          "updatedAt": "2022-11-10T17:48:00.334Z",
          "__v": 0
      },
      {
          "_id": "636d3c982e4bbfe50ea0d483",
          "tweetText": "636d39302e4bbfe50ea0d455",
          "userImg": "null",
          "userId": "636d312babf4525cf38bfb2e",
          "replyBy": "everyone",
          "likes": [],
          "comments": [
              "636d3cf22e4bbfe50ea0d490",
              "636d3cf72e4bbfe50ea0d496"
          ],
          "retweetUser": [],
          "replyTo": "636d39302e4bbfe50ea0d455",
          "saved": [],
          "createdAt": "2022-11-10T18:02:00.329Z",
          "updatedAt": "2022-11-10T18:03:35.620Z",
          "__v": 0
      },
      {
          "_id": "636d3f3f2e4bbfe50ea0d4c6",
          "tweetText": "go and sit down",
          "userImg": "null",
          "userId": "636d312babf4525cf38bfb2e",
          "replyBy": "everyone",
          "likes": [],
          "comments": [],
          "retweetUser": [],
          "replyTo": "636d39302e4bbfe50ea0d455",
          "saved": [],
          "createdAt": "2022-11-10T18:13:19.672Z",
          "updatedAt": "2022-11-10T18:13:19.672Z",
          "__v": 0
      },
      {
          "_id": "636d3f432e4bbfe50ea0d4cc",
          "tweetText": "go and sit down",
          "userImg": "null",
          "userId": "636d312babf4525cf38bfb2e",
          "replyBy": "everyone",
          "likes": [],
          "comments": [],
          "retweetUser": [],
          "replyTo": "636d39302e4bbfe50ea0d455",
          "saved": [],
          "createdAt": "2022-11-10T18:13:23.539Z",
          "updatedAt": "2022-11-10T18:13:23.539Z",
          "__v": 0
      },
      {
          "_id": "636d3f442e4bbfe50ea0d4d2",
          "tweetText": "go and sit down",
          "userImg": "null",
          "userId": "636d312babf4525cf38bfb2e",
          "replyBy": "everyone",
          "likes": [],
          "comments": [],
          "retweetUser": [],
          "replyTo": "636d39302e4bbfe50ea0d455",
          "saved": [],
          "createdAt": "2022-11-10T18:13:24.042Z",
          "updatedAt": "2022-11-10T18:13:24.042Z",
          "__v": 0
      },
      {
          "_id": "636d3f442e4bbfe50ea0d4d8",
          "tweetText": "go and sit down",
          "userImg": "null",
          "userId": "636d312babf4525cf38bfb2e",
          "replyBy": "everyone",
          "likes": [],
          "comments": [],
          "retweetUser": [],
          "replyTo": "636d39302e4bbfe50ea0d455",
          "saved": [],
          "createdAt": "2022-11-10T18:13:24.289Z",
          "updatedAt": "2022-11-10T18:13:24.289Z",
          "__v": 0
      },
      {
          "_id": "636d3f442e4bbfe50ea0d4de",
          "tweetText": "go and sit down",
          "userImg": "null",
          "userId": "636d312babf4525cf38bfb2e",
          "replyBy": "everyone",
          "likes": [],
          "comments": [],
          "retweetUser": [],
          "replyTo": "636d39302e4bbfe50ea0d455",
          "saved": [],
          "createdAt": "2022-11-10T18:13:24.338Z",
          "updatedAt": "2022-11-10T18:13:24.338Z",
          "__v": 0
      }
  ],
  "retweetUser": [],
  "saved": [],
  "createdAt": "2022-11-10T17:47:28.583Z",
  "updatedAt": "2022-11-10T18:13:24.342Z",
  "__v": 0
}

const TweetPage = (props) => {
  
  let { tweetId, username } = useParams();

  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <section>
            <Tweet tweet={tweet}/>
          </section>
          <aside className="content__aside">
            <Trend />
          </aside>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .content {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1.5625rem;
    position: relative;
  }

  .content__aside {
    /* position: fixed;
    right: 0; */
  }

  @media (max-width: 45em) {
    .content {
      grid-template-columns: 1fr;
    }
    .content__aside {
      display: none;
    }
  }
`;

export default TweetPage;
