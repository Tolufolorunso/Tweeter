import styled from 'styled-components';

const AuthWrapper = styled.div`
  width: min(600px, 100% - 2rem);
  background-color: var(--clr-neutral-100);
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 20px;
  padding-bottom: 50px;
  overflow: hidden;
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
    overflow: hidden;
  }

  .step {
    padding-inline: 1.8rem;
    position: absolute;
    min-width: 100%;
    transform: translateX(200%);
    transition: all 0.3s ease-in;
  }

  .pre {
    transform: translateX(-200%);
  }
  .active {
    transform: translateX(0);
  }
`;

export default AuthWrapper;
