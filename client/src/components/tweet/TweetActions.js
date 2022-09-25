import { MdOutlineModeComment } from 'react-icons/md';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { BsFillBookmarkFill } from 'react-icons/bs';

const TweetActions = () => {
  return (
    <div className="tweetActions">
      <div className="line"></div>
      <ul className="py">
        <li className="comment">
          <MdOutlineModeComment className="icons" /> <span>Comment</span>
        </li>
        <li className="retweeted">
          <AiOutlineRetweet className="icons" /> <span>Retweeted</span>
        </li>
        <li className="liked">
          <FcLike className="icons" /> <span>Liked</span>
        </li>
        <li className="saved">
          <BsFillBookmarkFill className="icons" /> <span>Saved</span>
        </li>
      </ul>
      <div className="line"></div>
    </div>
  );
};

export default TweetActions;
