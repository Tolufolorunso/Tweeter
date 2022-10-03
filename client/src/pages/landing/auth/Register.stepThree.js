import React from 'react';

import { Heading } from '../../../components';

const RegisterStepThree = ({
  editFormAgain,
  values,
  handleSubmit,
  handleChange,
  isLoading,
  error,
}) => {
  const focusHandler = () => {
    editFormAgain();
  };

  return (
    <>
      <Heading text="Ready to submit?" tag="h2" size={2} className="hi" />
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <input
            type="text"
            name="name"
            className="input inputName"
            onFocus={focusHandler}
            onChange={handleChange}
            value={values.name}
            id="name"
          />
        </div>
        <div className="formGroup">
          <input
            type="text"
            name="name"
            className="input inputName"
            onFocus={focusHandler}
            onChange={handleChange}
            value={values.username}
            id="username"
          />
        </div>
        <div className="formGroup">
          <input
            type={values.email ? 'email' : 'tel'}
            name={values.email ? 'email' : 'phone'}
            className="input inputName"
            value={values.email || values.phone}
            id={values.email ? 'email' : 'phone'}
            onFocus={focusHandler}
            onChange={handleChange}
          />
        </div>

        <div className="passwordInput formGroup">
          <input
            type="text"
            name="password"
            className="input passwordName"
            onFocus={focusHandler}
            onChange={handleChange}
            value={values.password}
            id="password"
          />
        </div>
        <div className="formGroup">
          <input
            type="text"
            name="date"
            className="input inputName"
            onFocus={focusHandler}
            onChange={handleChange}
            value={values.calcBirthYear()}
            id="birth-date"
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button className="btn submit-btn" disabled={isLoading}>
          {isLoading ? 'Submiting...' : 'Submit'}
        </button>
      </form>
    </>
  );
};

export default RegisterStepThree;
