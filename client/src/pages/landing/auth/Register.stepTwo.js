import React from 'react';
import { Heading } from '../../../components';

const RegisterSteptwo = ({ nextSlide }) => {
  return (
    <>
      <div>
        <Heading
          text="Customize your experience"
          tag="h2"
          size={2}
          className="hi"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <Heading
            text="Track where you see Twitter content across the web"
            tag="h3"
            size={1}
            className="hi"
          />
          <p
            style={{
              display: 'flex',
              alignItems: 'baseline',
              fontWeight: 400,
            }}
          >
            <span>
              Twitter uses this data to personalize your experience. This web
              browsing history will never be stored with your name, email, or
              phone number.
            </span>
            <input type="checkbox" name="agree" id="" value="check" />
          </p>
          <p className="terms">
            By signing up, you agree to our <a href="http://he.co">Term</a>,{' '}
            <a href="http://he.co">Privacy Policy</a>, and{' '}
            <a href="http://he.co">Cookie Use</a>. Twitter may use your contact
            information, including your email address and phone number for
            purposes outlined in our Privacy Policy.{' '}
            <a href="http://he.co">Learn more</a>
          </p>
        </div>
      </div>

      <button className="btn " onClick={() => nextSlide('step-2')}>
        Next
      </button>
    </>
  );
};

export default RegisterSteptwo;
