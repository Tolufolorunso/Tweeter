import React from 'react';

const Input = ({ label, inputType, handleOnChange, disable, value }) => {
  if (inputType === 'textarea') {
    return (
      <div className="form__group">
        <label htmlFor={label} className="form__group--label">
          {label[0].toUpperCase() + label.slice(1)}
        </label>
        <textarea
          name="bio"
          id={label}
          cols="30"
          rows="5"
          placeholder={`Enter your ${label}...`}
          className="forum__group--input"
          value={value}
          onChange={handleOnChange}
        ></textarea>
      </div>
    );
  }
  return (
    <div className="form__group">
      <label htmlFor={label} className="form__group--label">
        {label[0].toUpperCase() + label.slice(1)}
      </label>
      <input
        type={!inputType ? 'text' : inputType}
        className="forum__group--input"
        id={label}
        placeholder={`Enter your ${label}...`}
        onChange={handleOnChange}
        value={value}
        name={label}
        disabled={disable}
      />
    </div>
  );
};

export default Input;
