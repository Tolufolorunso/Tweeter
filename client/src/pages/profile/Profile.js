import CoverPicture from './CoverPicture';
import ProfileWrapper from './profile.styled';
import ProfileDetail from './ProfileDetail';
// import { tweetData } from '../home/tweetData'; // Dummy data
import { ProfileAside, Tweet } from '../../components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useTweetContext } from '../../context/tweets/tweetContext';
import { useState } from 'react';
import { useAuthContext } from '../../context/auth/authContext';
// import ProfileAside from './ProfileAside';
import authFetch from '../../api/fetchApi';

const lists = ['Tweets', 'Tweets & replies', 'media', 'Likes'];

const Profile = () => {
  let { username } = useParams();
  const { getTweets, tweets } = useTweetContext();
  const { user } = useAuthContext();
  const [tweetsData, setTweetsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    setTweetsData(tweets);
  }, [tweets]);

  const fetchUser = async () => {
    try {
      const res = await authFetch(`/users/${username}`);
      if (res.data.status) {
        setUserDetail(res.data.user);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (user.username === username) {
      setUserDetail(user);
    } else {
      fetchUser();
    }
    // eslint-disable-next-line
  }, [username, user]);

  useEffect(() => {
    setTweetsData(tweets);
  }, [tweets]);

  useEffect(() => {
    getTweets(username);
    setIsLoading(false);
    // eslint-disable-next-line
  }, [username]);

  return (
    <ProfileWrapper>
      <CoverPicture src={userDetail?.coverImg} userName="user name" />
      <div className="container">
        <ProfileDetail user={userDetail} />
        <div className="home">
          <ProfileAside lists={lists} />
          <div className="home__main">
            {/* <Text
              title="Daniel Jensen Retweeted"
              style={{ marginBottom: '3px', fontSize: '14px' }}
            /> */}
            <div className="mb-6 tweets">
              {isLoading ? (
                <div style={{ textAlign: 'center', color: 'green' }}>
                  <h2>Loading</h2>
                </div>
              ) : (
                tweetsData.map((tweet) => {
                  return <Tweet tweet={tweet} key={tweet._id} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
