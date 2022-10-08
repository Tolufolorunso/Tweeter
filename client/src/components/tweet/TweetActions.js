import { MdOutlineModeComment } from 'react-icons/md';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useTweetContext } from '../../context/tweets/tweetContext';
import { useAuthContext } from '../../context/auth/authContext';

const TweetActions = ({ others: { retweet, likes, _id } }) => {
  const { setLike, setRetweet, setUnlike } = useTweetContext();
  const { user } = useAuthContext();

  // console.log(_id);

  const isRetweet = () => {
    return retweet.find((r) => r.username === user?.username);
  };

  const handleComment = () => {
    console.log('clicked');
  };

  const handleRetweet = () => {
    setRetweet(_id);
  };

  const handleLike = () => {
    if (likes.includes(user.username)) {
      setUnlike(_id, user.username);
    } else {
      setLike(_id, user.username);
    }
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
          className={`tweetActions-li ${isRetweet() ? 'retweeted' : null}`}
          onClick={handleRetweet}
        >
          <AiOutlineRetweet className="icons" /> <span>Retweeted</span>
        </li>
        <li className="tweetActions-li" onClick={handleLike}>
          <FcLike className="icons" /> <span>Like</span>
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
