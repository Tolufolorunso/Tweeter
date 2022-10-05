import { MdOutlineModeComment } from 'react-icons/md';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useTweetContext } from '../../context/tweets/tweetContext';

const TweetActions = () => {
  const { setLike } = useTweetContext();
  const handleComment = () => {
    console.log('clicked');
  };

  const handleRetweet = () => {
    console.log('retweet');
  };

  const handleLike = () => {
    setLike();
  };

  const handleSave = () => {
    console.log('save');
  };
  return (
    <div className="tweetActions">
      <div className="line"></div>
      <ul className="py">
        <li className="tweetActions-li comment" onClick={handleComment}>
          <MdOutlineModeComment className="icons" /> <span>Comment</span>
        </li>
        <li className="tweetActions-li retweeted" onClick={handleRetweet}>
          <AiOutlineRetweet className="icons" /> <span>Retweeted</span>
        </li>
        <li className="tweetActions-li liked" onClick={handleLike}>
          <FcLike className="icons" /> <span>Liked</span>
        </li>
        <li className="tweetActions-li saved" onClick={handleSave}>
          <BsFillBookmarkFill className="icons" /> <span>Saved</span>
        </li>
      </ul>
      <div className="line"></div>
    </div>
  );
};

export default TweetActions;
