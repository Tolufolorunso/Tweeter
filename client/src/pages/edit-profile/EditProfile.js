import React from 'react';
import EditProfileWrapper from './editProfile.styled';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/user/userContext';
import Form from './Form';
import { useState } from 'react';
import { useEffect } from 'react';

const values = {
  name: '',
  bio: '',
  phone: '',
  email: '',
  password: '*****************',
};

const EditProfile = () => {
  const { user } = useAuthContext();
  const [userDetail, setUserDetials] = useState(values);

  const handleOnChange = (e) => {
    setUserDetials(() => {
      return { ...userDetail, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userDetail);
  };

  useEffect(() => {
    setUserDetials(() => {
      return {
        ...values,
        name: user.name,
        bio: user.bio,
        email: user?.email,
      };
    });
  }, [user]);

  return (
    <EditProfileWrapper>
      <div className="back">
        <Link to={`/profile/${user.username}`}>{'<'} back</Link>
      </div>
      {user && (
        <Form
          userDetail={userDetail}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
        />
      )}
    </EditProfileWrapper>
  );
};

export default EditProfile;
