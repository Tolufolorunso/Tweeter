import React, { useEffect, useState } from 'react';
import { ImEyeBlocked, ImEye } from 'react-icons/im';
import { getDaysInMonth, months, years } from '../../../utils/date';

import { Heading } from '../../../components';

const RegisterStepOne = ({
  nextSlide,
  nameLength,
  usernameLength,
  values,
  handleChange,
  handleEmailPhone,
  emailOrPhone,
}) => {
  const [activeInput, setActiveInput] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [daysInMonth, setDaysInMonth] = useState(31);

  const focusHandler = (e) => {
    setActiveInput(e.target.name);
  };

  const blurHandler = () => {
    setActiveInput('');
  };

  const passwordVisibleHandler = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    setDaysInMonth(
      getDaysInMonth(months.indexOf(values.month) + 1, values.year)
    );
  }, [values.month, values.year]);

  return (
    <>
      <Heading text="Create your account" tag="h2" size={2} className="hi" />
      <form>
        <div
          className={`formGroup ${activeInput === 'name' ? 'activeInput' : ''}`}
        >
          <div
            className={`label-counter-box  ${
              activeInput === 'name' || values.name ? 'label-up' : ''
            }`}
          >
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
            activeInput === 'username' ? 'activeInput' : ''
          }`}
        >
          <div
            className={`label-counter-box  ${
              activeInput === 'username' || values.username ? 'label-up' : ''
            }`}
          >
            <label htmlFor="username">Username</label>
            {activeInput === 'username' ? (
              <div className="char-number">{usernameLength} / 50</div>
            ) : null}
          </div>
          <input
            type="text"
            name="username"
            className="input inputName"
            maxLength="50"
            onChange={handleChange}
            onFocus={focusHandler}
            onBlur={blurHandler}
            value={values.username}
            id="username"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            className={`formGroup ${
              activeInput === 'email' ? 'activeInput' : ''
            }`}
          >
            <div
              className={`label-counter-box  ${
                activeInput === 'email' || values.email ? 'label-up' : ''
              }`}
            >
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
          <div
            className={`label-counter-box  ${
              activeInput === 'password' || values.password ? 'label-up' : ''
            }`}
          >
            <label htmlFor="password">password</label>
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
            {isVisible ? <ImEyeBlocked /> : <ImEye className="eye-color" />}
          </span>
        </div>
        <div className="birthYear">
          <p>Date of birth</p>
          <div className="birthYear__inputs">
            <div className="formGroup" style={{ flex: 3 }}>
              <div
                className={`label-counter-box  ${
                  activeInput === 'month' || values.month ? 'label-up' : ''
                }`}
              >
                <label htmlFor="month">Month</label>
              </div>
              <select
                className="input"
                name="month"
                id="month"
                onChange={handleChange}
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled></option>
                {months.map((month) => {
                  return (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="formGroup" style={{ flex: 1 }}>
              <div
                className={`label-counter-box  ${
                  activeInput === 'day' || values.day ? 'label-up' : ''
                }`}
              >
                <label htmlFor="day">Day</label>
              </div>
              <select
                className="input"
                name="day"
                id="day"
                onChange={handleChange}
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled></option>
                {[...Array(daysInMonth)].map((_, idx) => (
                  <option value={idx + 1} key={idx}>
                    {idx + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="formGroup" style={{ flex: 2 }}>
              <div
                className={`label-counter-box  ${
                  activeInput === 'year' || values.year ? 'label-up' : ''
                }`}
              >
                <label htmlFor="year">Year</label>
              </div>
              <select
                className="input"
                name="year"
                id="year"
                onChange={handleChange}
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled></option>
                {years.map((year) => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
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
