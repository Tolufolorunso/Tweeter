import React from 'react';
import styled from 'styled-components';

const Toast = () => {
  return (
    <Wrapper className="toast-box">
      <div className="toast-box-icon">
        <i className="fa fa-solid fa-check"></i>
      </div>
      <div className="toast-box-text">
        <p className="toast-heading">Success</p>
        <p className="toast-description">Submission successful!</p>
      </div>
      <div className="toast-close-icon">
        <i className="fa fa-times close"></i>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 300px;
  background-color: #fff;
  padding: 12px 18px;
  border-radius: 8px;
  box-shadow: 1px 2px 4px 2px rgb(227, 222, 222);
  gap: 20px;
  align-items: center;
  border-left: 5px solid green;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  z-index: 10000;
  /* visibility: hidden; */
  transform: translateX(-100000px);
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  .toast-box.active {
    /* visibility: visible; */
    transform: translateX(0);
  }

  .toast-box-icon {
    background-color: green;
    padding: 5px 8px;
    border-radius: 100%;
  }

  .toast-box-icon .fa-check {
    font-size: 1rem;
    color: #fff;
  }

  .toast-close-icon .fa-times {
    position: absolute;
    display: block;
    top: 5px;
    right: 10px;
    padding: 5px;
    font-size: 1.2rem;
    color: #1a1a1a;
    cursor: pointer;
    opacity: 0.7;
  }

  .toast-close-icon .fa-times:hover {
    opacity: 1;
  }

  .toast-box-text {
    position: relative;
    text-align: left;
  }

  .toast-box-text .toast-heading {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1a1a1a;
  }

  .toast-box-text .toast-description {
    font-size: 0.7rem;
    color: #3d3d3d;
  }
`;

export default Toast;
