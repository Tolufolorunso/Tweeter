import { ProfileAside, Tweet } from '../../components';
// import { tweetData } from '../home/tweetData';
import BookmarkWrapper from './bookmarks.styled';
import { useTweetContext } from '../../context/tweets/tweetContext';
import { useEffect, useState } from 'react';
const user = JSON.parse(localStorage.getItem('user'));

const lists = ['Tweets', 'Tweets & replies', 'media', 'Likes'];

const Bookmark = () => {
  const { getBookmarks, tweets, isLoading } = useTweetContext();
const [selectedTab, setSelectedTab] = useState('Tweets')

  useEffect(() => {
    getBookmarks(user.username);
    // eslint-disable-next-line
  }, []);

  return (
    <BookmarkWrapper>
      <div className="container">
        <div className="bookmark">
          <ProfileAside lists={lists} bookmark selected={selectedTab} setSelectedTab={setSelectedTab}/>
          <div className="bookmark__main ">
            <div className="mb-6 tweets">
              {isLoading ? (
                <div style={{ textAlign: 'center', color: 'green' }}>
                  <h2>Loading</h2>
                </div>
              ) : (
                tweets.map((tweet) => {
                  return <Tweet tweet={tweet} key={tweet._id} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </BookmarkWrapper>
  );
};

export default Bookmark;
