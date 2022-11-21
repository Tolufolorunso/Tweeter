import { useLocation } from "react-router-dom";

import Avater from "../Avater";
import Text from "../Text";
import DefaultAvater from "../../assets/images/defaultAvater.png";
import { AiOutlinePushpin, AiOutlineMore } from "react-icons/ai";
// import { useState } from "react";
const span = { color: "#BDBDBD", fontWeight: 500 };
const mainUser = JSON.parse(localStorage.getItem("user"))?.username;

const TweetHeader = ({
  AvaterImage,
  userInfo,
  handleClickTweetMore,
  deleteTweet,
  more,
}) => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <Avater src={!AvaterImage ? AvaterImage : DefaultAvater} alt="tweeter" />
      <div className="header__title">
        <Text title={userInfo?.name} tag="h3" />
        <Text title="24 August at 20:43" fs="0.75" tag="span" style={span} />
      </div>
      <div className="header__more">
        <AiOutlineMore
          role="button"
          tabIndex={0}
          className="image"
          onClick={handleClickTweetMore}
        />
      </div>
      <div className={`tweet__more ${more ? "active-more" : ""}`}>
        <button onClick={deleteTweet}>delete</button>
        <button>delete</button>
        <button>delete</button>
        <button>delete</button>
        <button>delete</button>
      </div>
      {pathname.includes("profile") && pathname.includes(mainUser) ? (
        <AiOutlinePushpin
          role="button"
          tabIndex={0}
          onClick={() => {
            pinTweet()
          }}
        />
      ) : null}
    </header>
  );
};

export default TweetHeader;
