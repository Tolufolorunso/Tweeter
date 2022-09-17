import AuthWrapper from './auth.styled';
import { GrClose } from 'react-icons/gr';
const LoginModal = ({ closeModal }) => {
  return (
    <AuthWrapper>
      <button className="close" onClick={closeModal}>
        <GrClose />
      </button>
      <h1>Login</h1>
    </AuthWrapper>
  );
};

export default LoginModal;
