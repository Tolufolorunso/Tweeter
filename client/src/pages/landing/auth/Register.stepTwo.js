import React from 'react';

const RegisterSteptwo = ({ nextSlide }) => {
  return (
    <>
      <h1>Step two</h1>
      <button onClick={() => nextSlide('step-2')}>Next</button>
    </>
  );
};

export default RegisterSteptwo;
