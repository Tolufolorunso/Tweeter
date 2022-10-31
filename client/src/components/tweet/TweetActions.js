import { MdOutlineModeComment } from 'react-icons/md';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useTweetContext } from '../../context/tweets/tweetContext';
import { useAuthContext } from '../../context/user/userContext';

const TweetActions = ({ others: { retweet, likes, _id } }) => {
  const { setLike, setRetweet, setUnRetweet } = useTweetContext();
  const { user } = useAuthContext();

  const isRetweet = () => retweet.includes(user._id);
  const isLike = () => likes.includes(user._id);

  const handleComment = () => {
    console.log('clicked');
  };

  const handleRetweet = () => {
    if (retweet.includes(user.username)) {
      setUnRetweet(_id, user.username);
    } else {
      setRetweet(_id, user.username);
    }
  };

  const handleLike = () => {
    setLike(_id, user.username);
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
        <li
          className={`tweetActions-li ${isRetweet() && 'retweeted'}`}
          onClick={handleRetweet}
        >
          <AiOutlineRetweet className="icons" />{' '}
          <span>{isRetweet() ? 'Retweeted' : 'Retweet'}</span>
        </li>
        <li
          className={`tweetActions-li ${isLike() && 'liked'}`}
          onClick={handleLike}
        >
          <FcLike className="icons" style={{pointerEvent: "none"}}/>{' '}
          <span style={{pointerEvent: "none"}}>{isLike() ? 'Liked' : 'Like'}</span>
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
