import { IoMdPersonAdd } from 'react-icons/io';
import { useAuthContext } from '../../context/user/userContext';

import { Avater, Button, Text } from '../../components';
import { Link } from 'react-router-dom';
const button = { fontWeight: 500, padding: '3px 8px' };
const avaterStyle = { height: '70px', width: '70px', marginTop: '-50px' };

const ProfileDetail = ({ user }) => {
  const { follow, user: self } = useAuthContext();
  console.log(11, user?.following, user?._id);

  console.log(self?.following.includes(user?._id));
  const handleFollow = () => {
    follow(user._id);
  };

  return (
    <div className="profile-detail">
      <Avater style={avaterStyle} src={undefined} />
      <div className="profile-detail__content">
        <div className="content mb">
          <Text title={user?.name} tag="h3" fs={1.5} />
          <div>
            <Text
              title={`${user?.following.length} Following`}
              tag="span"
              fs={0.75}
              style={{ marginRight: '5px' }}
            />
            <Text
              title={`${user?.followers.length} Followers`}
              tag="span"
              fs={0.75}
            />
          </div>
        </div>
        <Text title={user?.bio || 'Update your bio'} tag="p" />
      </div>
      <div className="follow-btn">
        {user?.username === self?.username ? (
          <Link to={`/profile/${self.username}/edit`}>
            <IoMdPersonAdd />
            Edit Profile
          </Link>
        ) : self?.following.includes(user?._id) ? (
          <Button
            icon={<IoMdPersonAdd />}
            text="Unfollow"
            style={button}
            onClick={handleFollow}
          />
        ) : (
          <Button
            icon={<IoMdPersonAdd />}
            text="Follow"
            style={button}
            onClick={handleFollow}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileDetail;
