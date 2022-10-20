import { ProfileAside, Tweet } from '../../components';
// import { tweetData } from '../home/tweetData';
import BookmarkWrapper from './bookmarks.styled';
import { useTweetContext } from '../../context/tweets/tweetContext';
import { useEffect, useState } from 'react';
const user = JSON.parse(localStorage.getItem('user'));

const lists = ['Tweets', 'Tweets & replies', 'media', 'Likes'];

const Bookmark = () => {
  const { getTweets, isLoading } = useTweetContext();
  const [tweetsArr, setTweetsArr] = useState([]);

  const fetchTweets = async () => {
    let tweets;
    if (user.username) {
      tweets = await getTweets(user.username);
      setTweetsArr(tweets);
    }
  };

  useEffect(() => {
    fetchTweets();
    // eslint-disable-next-line
  }, []);

  return (
    <BookmarkWrapper>
      <div className="container">
        <div className="bookmark">
          <ProfileAside lists={lists} bookmark />
          <div className="bookmark__main ">
            <div className="mb-6 tweets">
              {isLoading ? (
                <div style={{ textAlign: 'center', color: 'green' }}>
                  <h2>Loading</h2>
                </div>
              ) : (
                tweetsArr.map((tweet) => {
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
