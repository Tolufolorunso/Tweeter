import styled from 'styled-components';

const AuthWrapper = styled.div`
  width: min(600px, 100% - 2rem);
  background-color: var(--clr-neutral-100);
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 20px;

  .nav {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.7rem;
  }

  .close {
    margin: 1rem;
    font-size: 1.4rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default AuthWrapper;
