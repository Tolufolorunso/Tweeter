import AuthWrapper from './auth.styled';

const LoginModal = ({ closeModal }) => {
  return (
    <AuthWrapper>
      <button className="close" onClick={closeModal}>
        +
      </button>
      <h1>Login</h1>
    </AuthWrapper>
  );
};

export default LoginModal;
