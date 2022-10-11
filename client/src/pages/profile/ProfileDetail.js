import { IoMdPersonAdd } from 'react-icons/io';
import { useAuthContext } from '../../context/auth/authContext';

import { Avater, Button, Text } from '../../components';
const button = { fontWeight: 500, padding: '3px 8px' };
const avaterStyle = { height: '70px', width: '70px', marginTop: '-50px' };

const ProfileDetail = ({ user }) => {
  const { user: self } = useAuthContext();

  return (
    <div className="profile-detail">
      <Avater style={avaterStyle} />
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
        <Button
          icon={<IoMdPersonAdd />}
          text={user?.username === self?.username ? 'Edit Profile' : 'Follow'}
          style={button}
        />
      </div>
    </div>
  );
};

export default ProfileDetail;
