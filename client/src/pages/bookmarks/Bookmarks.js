import { ProfileAside, Tweet } from '../../components';
import { tweetData } from '../home/tweetData';
import BookmarkWrapper from './bookmarks.styled';

const lists = ['Tweets', 'Tweets & replies', 'media', 'Likes'];

const Bookmark = () => {
  return (
    <BookmarkWrapper>
      <div className="container">
        <div className="bookmark">
          <ProfileAside lists={lists} bookmark />
          <div className="bookmark__main ">
            <div className="mb-6 tweets">
              {tweetData.map((tweet) => {
                return <Tweet tweet={tweet} key={tweet.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </BookmarkWrapper>
  );
};

export default Bookmark;
