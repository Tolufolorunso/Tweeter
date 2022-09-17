import React, { useState } from 'react';
import { ImEyeBlocked, ImEye } from 'react-icons/im';

import { Heading } from '../../../components';

const RegisterStepOne = ({
  nextSlide,
  nameLength,
  values,
  handleChange,
  handleEmailPhone,
  emailOrPhone,
}) => {
  const [activeInput, setActiveInput] = useState('');
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
              type={emailOrPhone === 'email' ? 'email' : 'number'}
              name={emailOrPhone === 'email' ? 'email' : 'phone'}
              className="input inputName"
              maxLength="50"
              onChange={handleChange}
              onFocus={focusHandler}
              onBlur={blurHandler}
              value={emailOrPhone === 'email' ? values.email : values.phone}
              id={emailOrPhone === 'email' ? 'email' : 'phone'}
            />
          </div>
          <button type="button" className="instead" onClick={handleEmailPhone}>
            Use phone instead
          </button>
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
            type={isVisible ? 'password' : 'text'}
            name="password"
            className="input passwordName"
            maxLength="50"
            onChange={handleChange}
            onFocus={focusHandler}
            onBlur={blurHandler}
            value={values.password}
            id="password"
          />
          <span className="visiblePassword" onClick={passwordVisibleHandler}>
            {isVisible ? <ImEyeBlocked /> : <ImEye />}
          </span>
        </div>
        <div className="birthYear">
          <p>Date of birth</p>
          <div className="birthYear__inputs">
            <div className="formGroup">hello</div>
            <div className="formGroup">hello</div>
            <div className="formGroup">hello</div>
          </div>
        </div>
      </form>
      <button onClick={() => nextSlide('step-1')} className="btn next-btn">
        Next
      </button>
    </>
  );
};

export default RegisterStepOne;
