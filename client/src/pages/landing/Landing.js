import { useState } from 'react';
import Wrapper from '../../assets/css/wrappers/Landing.styled';
import Logo from '../../assets/images/tweeter-small.svg';
import LoginModal from './auth/Login.Modal';
import RegisterModal from './auth/Register.Modal';
import Footer from './Footer';
import Main from './Main';

const Landing = () => {
  const [isOverLayOPen, setIsOverLayOPen] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const openModal = (modalType) => {
    setIsOverLayOPen(!isOverLayOPen);
    document.body.classList.add('modal-open');
    if (modalType === 'register') {
      setRegisterModal(!registerModal);
    }

    if (modalType === 'login') {
      setLoginModal(!loginModal);
    }
  };

  const closeModal = () => {
    document.body.classList.remove('modal-open');
    setIsOverLayOPen(false);
    setRegisterModal(false);
    setLoginModal(false);
  };

  return (
    <Wrapper>
      {isOverLayOPen ? (
        <div className="overlay" onClick={closeModal}></div>
      ) : null}
      {registerModal ? <RegisterModal closeModal={closeModal} /> : null}
      {loginModal ? <LoginModal closeModal={closeModal} /> : null}

      <div className="main">
        <div className="image">
          <img src={Logo} alt="tweeter logo" className="Image-logo" />
        </div>
        <div className="content">
          <Main openModal={openModal} />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Landing;
