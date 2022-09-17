import styled from 'styled-components';

const AuthWrapper = styled.div`
  width: min(600px, 100% - 2rem);
  background-color: var(--clr-neutral-100);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 20px;
  padding-bottom: 20px;
  /* overflow: hidden; */
  .nav {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.7rem;
  }

  .close {
    margin: 1rem;
    font-size: 1.3rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
  }

  .close:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  /* register style */
  .steps {
    width: 100%;
    /* height: auto; */
    overflow: hidden;
    /* min-height: 500px; */
  }

  .step {
    padding-inline: 4rem;
    min-width: 100%;
    /* position: absolute; */
    /* min-height: 500px; */
    /* transform: translateX(200%); */
    display: none;
    transition: all 0.3s ease-in;
  }

  .pre {
    /* transform: translateX(-200%); */
  }
  .active {
    /* transform: translateX(0); */
    display: block;
  }

  .formGroup {
    border: 1px solid rgba(0, 0, 0, 0.2);
    /* line-height: 1; */
    font-size: var(--size-300);
    padding: 2px 5px;
    margin-top: 20px;
    border-radius: 3px;
  }

  .label-counter-box {
    display: flex;
    justify-content: space-between;
  }

  .input {
    border: none;
    outline: none;
    width: 100%;
  }

  .formGroup.activeInput {
    border: 1px solid green;
  }
  .passwordInput {
    position: relative;
  }
  .visiblePassword {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 1.2rem;
  }

  .birthYear__inputs {
    display: flex;
    width: 100%;
  }

  .btn {
    display: block;
    width: 100%;
    background-color: rgb(15, 20, 25);
    opacity: 0.8;
  }
  .terms {
    font-weight: 300;
    font-size: 0.9rem;
    margin-bottom: 60px;
  }
  .terms a {
    color: var(--clr-primary-400);
  }

  @media (max-width: 50em) {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
`;

export default AuthWrapper;
