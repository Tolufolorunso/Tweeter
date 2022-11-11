import Avater from "../Avater";
import Text from "../Text";
import DefaultAvater from "../../assets/images/defaultAvater.png";
import { BiImage } from "react-icons/bi";
import { useState } from "react";

const span = { color: "#BDBDBD", fontWeight: 500 };

const TweetHeader = ({ AvaterImage, userInfo }) => {
  const [more, setMore] = useState(false)
  const handleMouseOverTweetMore = (e) => {
    console.log(e)
    setMore(true)
  };
  const handleMouseLeaveTweetMore = () => {
    setMore(false)
  };

  return (
    <header className="header">
      <Avater src={!AvaterImage ? AvaterImage : DefaultAvater} alt="tweeter" />
      <div className="header__title">
        <Text title={userInfo?.name} tag="h3" />
        <Text title="24 August at 20:43" fs="0.75" tag="span" style={span} />
      </div>
      <div className="header__more">
        <BiImage className="image" onMouseOver={handleMouseOverTweetMore} />
      </div>
      <div className={`tweet__more ${more ? 'active-more' : ''}`}>
        <button>delete</button>
        <button>delete</button>
        <button>delete</button>
        <button>delete</button>
        <button>delete</button>
      </div>
    </header>
  );
};

export default TweetHeader;
