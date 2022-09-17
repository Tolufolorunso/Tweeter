import React from 'react';

import { Heading } from '../../../components';

const RegisterStepThree = ({ editFormAgain, values, handleSubmit }) => {
  console.log(values);
  const focusHandler = () => {
    editFormAgain();
  };
  return (
    <>
      <Heading text="Ready to submit?" tag="h2" size={2} className="hi" />
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <div className="label-counter-box">
            <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            name="name"
            className="input inputName"
            onFocus={focusHandler}
            value={values.name}
            id="name"
          />
        </div>
        <div className="formGroup">
          <div className="label-counter-box">
            <label htmlFor={values.email ? 'email' : 'phone'}>
              {values.email ? 'Email' : 'Phone'}
            </label>
          </div>
          <input
            type={values.email ? 'email' : 'tel'}
            name={values.email ? 'email' : 'phone'}
            className="input inputName"
            value={values.email || values.phone}
            id={values.email ? 'email' : 'phone'}
            onFocus={focusHandler}
          />
        </div>

        <div className="passwordInput formGroup">
          <div className="label-counter-box">
            <label htmlFor="email">password</label>
          </div>
          <input
            type="text"
            name="password"
            className="input passwordName"
            onFocus={focusHandler}
            value={values.password}
            id="password"
          />
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
            value={values.birthYear}
            id="birth-date"
          />
        </div>
        <button className="btn submit-btn">Submit</button>
      </form>
    </>
  );
};

export default RegisterStepThree;
