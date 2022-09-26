import { IoMdPersonAdd } from 'react-icons/io';

import { Avater, Button, Text } from '../../components';
const button = { fontWeight: 500, padding: '3px 8px' };
const avaterStyle = { height: '70px', width: '70px', marginTop: '-50px' };

const ProfileDetail = () => {
  return (
    <div className="profile-detail">
      <Avater style={avaterStyle} />
      <div className="profile-detail__content">
        <div className="content mb">
          <Text title="Tolulope folorunso" tag="h3" fs={1.5} />
          <div>
            <Text
              title="2,569 Following"
              tag="span"
              fs={0.75}
              style={{ marginRight: '5px' }}
            />
            <Text title="10.8K Followers" tag="span" fs={0.75} />
          </div>
        </div>
        <Text
          title="Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰"
          tag="p"
        />
      </div>
      <div className="follow-btn">
        <Button icon={<IoMdPersonAdd />} text="Folow" style={button} />
      </div>
    </div>
  );
};

export default ProfileDetail;
