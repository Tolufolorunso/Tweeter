import React from 'react';

const RegisterSteptwo = ({ nextSlide }) => {
  return (
    <>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi vero
        ipsa.
      </h1>
      <button onClick={() => nextSlide('step-2')}>Next</button>
    </>
  );
};

export default RegisterSteptwo;
