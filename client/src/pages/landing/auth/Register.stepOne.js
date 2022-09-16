import React from 'react';

const RegisterStepOne = ({ nextSlide }) => {
  return (
    <>
      <h1>Step one</h1>
      <button onClick={() => nextSlide('step-1')}>Next</button>
    </>
  );
};

export default RegisterStepOne;
