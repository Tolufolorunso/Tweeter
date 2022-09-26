import CoverPicture from './CoverPicture';
import ProfileWrapper from './profile.styled';
import CoverImage from '../../assets/images/kin.jpg';
import ProfileDetail from './ProfileDetail';
import { tweetData } from '../home/tweetData';
import { Text, Tweet } from '../../components';
import ProfileAside from './ProfileAside';

const Profile = () => {
  return (
    <ProfileWrapper>
      <CoverPicture src={CoverImage} userName="user name" />
      <div className="container">
        <ProfileDetail />
        <div className="home">
          <ProfileAside />
          <div className="home__main">
            <Text
              title="Daniel Jensen Retweeted"
              style={{ marginBottom: '3px', fontSize: '14px' }}
            />
            <div className="mb-6 tweets">
              {tweetData.map((tweet) => {
                return <Tweet tweet={tweet} key={tweet.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
