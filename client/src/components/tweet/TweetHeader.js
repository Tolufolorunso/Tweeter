import Avater from "../Avater";
import Text from "../Text";
import DefaultAvater from "../../assets/images/defaultAvater.png";
import { BiImage } from "react-icons/bi";
import { AiOutlinePushpin } from "react-icons/ai";
// import { useState } from "react";

const span = { color: "#BDBDBD", fontWeight: 500 };

const TweetHeader = ({
  AvaterImage,
  userInfo,
  handleClickTweetMore,
  deleteTweet,
  more,
}) => {
  return (
    <header className="header">
      <Avater src={!AvaterImage ? AvaterImage : DefaultAvater} alt="tweeter" />
      <div className="header__title">
        <Text title={userInfo?.name} tag="h3" />
        <Text title="24 August at 20:43" fs="0.75" tag="span" style={span} />
      </div>
      <div className="header__more">
        <BiImage className="image" onClick={handleClickTweetMore} />
      </div>
      <div className={`tweet__more ${more ? "active-more" : ""}`}>
        <button onClick={deleteTweet}>delete</button>
        <button>delete</button>
        <button>delete</button>
        <button>delete</button>
        <button>delete</button>
      </div>
      <AiOutlinePushpin
        onClick={() => {
          console.log("pin");
        }}
      />
    </header>
  );
};

export default TweetHeader;
