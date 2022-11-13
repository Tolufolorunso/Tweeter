import { MdOutlineModeComment } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useTweetContext } from "../../context/tweets/tweetContext";
import { useAuthContext } from "../../context/user/userContext";
import { useLocation, useNavigate } from "react-router-dom";

const TweetActions = ({
  others: { retweetUser, userId, likes, _id, saved },
}) => {
  const location = useLocation();
  const { setLike, setRetweet, saveTweet } = useTweetContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const isRetweet = () => retweetUser.includes(user._id);
  const isLike = () => likes.includes(user._id);
  const isSaved = () => saved.includes(user._id);

  console.log(isSaved());

  const handleComment = () => {
    navigate(`/${userId.username}/posts/${_id}`);
  };

  const handleRetweet = () => {
    setRetweet(_id, user.username);
  };

  const handleLike = () => {
    setLike(_id, user.username);
  };

  const handleSave = (e) => {
    saveTweet(_id, location.pathname);
    if (location.pathname.includes("bookmarks")) {
      e.target.closest(".hey").remove();
    }
  };
  return (
    <div className="tweetActions">
      <div className="line"></div>
      <ul className="py">
        <li className="tweetActions-li comment" onClick={handleComment}>
          <MdOutlineModeComment className="icons" /> <span>Comment</span>
        </li>
        <li
          className={`tweetActions-li ${isRetweet() && "retweeted"}`}
          onClick={handleRetweet}
        >
          <AiOutlineRetweet className="icons" />
          <span style={{ pointerEvent: "none", width: "9ch" }}>
            {isRetweet() ? "Retweeted" : "Retweet"}
          </span>
        </li>
        <li
          className={`tweetActions-li ${isLike() && "liked"}`}
          onClick={handleLike}
        >
          <FcLike className="icons" style={{ pointerEvent: "none" }} />{" "}
          <span style={{ pointerEvent: "none", width: "5ch" }}>
            {isLike() ? "Liked" : "Like"}
          </span>
        </li>
        <li
          className={`tweetActions-li ${isSaved() && "saved"}`}
          onClick={handleSave}
        >
          <BsFillBookmarkFill className="icons" />{" "}
          <span>{isSaved() ? "saved" : "save"}</span>
        </li>
      </ul>
      <div className="line"></div>
    </div>
  );
};

export default TweetActions;
