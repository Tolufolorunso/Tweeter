import React, { useState } from 'react';
import { ImEyeBlocked, ImEye } from 'react-icons/im';

import { Heading } from '../../../components';

const initialState = {
  name: '',
  email: '',
  phone: '',
  password: '',
  birthYear: '',
};

const RegisterStepOne = ({ nextSlide }) => {
  const [values, setValues] = useState(initialState);
  const [nameLength, setNameLength] = useState(0);
  const [activeInput, setActiveInput] = useState('');

  const [emailOrPhone, setEmailOrPhone] = useState('email');
  const [isVisible, setIsVisible] = useState(true);

  const focusHandler = (e) => {
    setActiveInput(e.target.name);
  };

  const blurHandler = () => {
    setActiveInput('');
  };

  const passwordVisibleHandler = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === 'name') {
      setNameLength(e.target.value.length);
    }
  };
  return (
    <>
      <Heading text="Create your account" tag="h2" size={2} className="hi" />
      <form>
        <div
          className={`formGroup ${activeInput === 'name' ? 'activeInput' : ''}`}
        >
          <div className="label-counter-box">
            <label htmlFor="name">Name</label>
            {activeInput === 'name' ? (
              <div className="char-number">{nameLength} / 50</div>
            ) : null}
          </div>
          <input
            type="text"
            name="name"
            className="input inputName"
            maxLength="50"
            onChange={handleChange}
            onFocus={focusHandler}
            onBlur={blurHandler}
            value={values.name}
            id="name"
          />
        </div>
        <div
          className={`formGroup ${
            activeInput === 'email' ? 'activeInput' : ''
          }`}
        >
          <div className="label-counter-box">
            <label htmlFor={emailOrPhone === 'email' ? 'email' : 'phone'}>
              {emailOrPhone === 'email' ? 'Email' : 'Phone'}
            </label>
          </div>
          <input
            type="text"
            name={emailOrPhone === 'email' ? 'email' : 'phone'}
            className="input inputName"
            maxLength="50"
            value={emailOrPhone === 'email' ? values.email : values.phone}
            id={emailOrPhone === 'email' ? 'email' : 'phone'}
          />
        </div>

        <div
          className={`passwordInput formGroup ${
            activeInput === 'password' ? 'activeInput' : ''
          }`}
        >
          <div className="label-counter-box">
            <label htmlFor="email">password</label>
          </div>
          <input
            type="text"
            name="password"
            className="input passwordName"
            value={values.password}
            id="password"
          />
          <span className="visiblePassword" onClick={passwordVisibleHandler}>
            {isVisible ? <ImEyeBlocked /> : <ImEye />}
          </span>
        </div>
        <div className="formGroup">
          <div className="label-counter-box">
            <label htmlFor="birth-date">Birth Date</label>
          </div>
          <input
            type="text"
            name="date"
            className="input inputName"
            onFocus={focusHandler}
            value="date"
            id="birth-date"
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </>
  );
};

export default RegisterStepOne;
