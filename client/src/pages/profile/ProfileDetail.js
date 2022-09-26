import React from 'react';
import { Avater } from '../../components';

const avaterStyle = { height: '70px', width: '70px', marginTop: '-50px' };

const ProfileDetail = () => {
  return (
    <div className="profile-detail">
      <Avater style={avaterStyle} />
    </div>
  );
};

export default ProfileDetail;
