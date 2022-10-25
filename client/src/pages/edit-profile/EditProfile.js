import React from 'react';
import EditProfileWrapper from './editProfile.styled';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/user/userContext';
import Form from './Form';
import { useState } from 'react';
import { useEffect } from 'react';
import CoverPicture from './CoverPicture';

const values = {
  name: '',
  bio: '',
  phone: '',
  email: '',
  password: '*****************',
  userImg: '',
};

const EditProfile = () => {
  const { user, updateProfile, isLoading } = useAuthContext();
  const [userDetail, setUserDetials] = useState(values);

  const handleOnChange = (e) => {
    setUserDetials(() => {
      return { ...userDetail, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccessful = updateProfile(user.username, userDetail);

    if (isSuccessful) {
      console.log('proceed');
    }
  };

  useEffect(() => {
    setUserDetials(() => {
      return {
        ...values,
        name: user.name,
        bio: user.bio,
        email: user?.email,
        phone: user?.phone,
        userImg: user.userImg,
      };
    });
  }, [user]);

  return (
    <EditProfileWrapper>
      <CoverPicture src={user?.coverImg} userName="user name" />
      <div className="back">
        <Link to={`/profile/${user.username}`}>{'<'} back</Link>
      </div>
      {user && (
        <Form
          userDetail={userDetail}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      )}
    </EditProfileWrapper>
  );
};

export default EditProfile;
