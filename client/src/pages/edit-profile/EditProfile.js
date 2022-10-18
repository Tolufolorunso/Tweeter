import React from 'react';
import EditProfileWrapper from './editProfile.styled';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/user/userContext';

const EditProfile = () => {
  const { user } = useAuthContext();

  return (
    <EditProfileWrapper>
      <div className="back">
        <Link to={`/profile/${user.username}`}>{'<'} back</Link>
      </div>
      <form className="form">
        <div className="form__heading">
          <h3>Change Info</h3>
          <p>Changes will be reflected to every services</p>
        </div>
        <div className="form__group">
          <label htmlFor="name" className="form__group--label">
            Name
          </label>
          <input
            type="text"
            className="forum__group--input"
            id="name"
            placeholder="Enter your name..."
          />
        </div>
        <div className="form__group">
          <label htmlFor="bio" className="form__group--label">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            cols="30"
            rows="5"
            placeholder="Enter your name..."
            className="forum__group--input"
          ></textarea>
        </div>
        <div className="form__group">
          <label htmlFor="phone" className="form__group--label">
            Phone
          </label>
          <input
            type="number"
            className="forum__group--input"
            id="phone"
            placeholder="Enter your phone..."
          />
        </div>
        <div className="form__group">
          <label htmlFor="email" className="form__group--label">
            Email
          </label>
          <input
            type="email"
            className="forum__group--input"
            id="email"
            placeholder="Enter your email..."
          />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__group--label">
            Password
          </label>
          <input
            type="password"
            className="forum__group--input"
            id="password"
            placeholder="Enter your password..."
          />
        </div>
        <div className="form__group">
          <button className="form__group--btn">save</button>
        </div>
      </form>
    </EditProfileWrapper>
  );
};

export default EditProfile;
