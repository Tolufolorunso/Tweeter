import AuthWrapper from './auth.styled';

const RegisterModal = ({ closeModal }) => {
  return (
    <AuthWrapper>
      <div className="nav">
        <button className="close" onClick={closeModal}>
          +
        </button>
        <span>{1} of 5</span>
      </div>

      <h1>Register</h1>
    </AuthWrapper>
  );
};

export default RegisterModal;
