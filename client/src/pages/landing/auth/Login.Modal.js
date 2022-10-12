import { GrClose } from 'react-icons/gr';
import { ImEyeBlocked, ImEye } from 'react-icons/im';
import { Link } from 'react-router-dom';

import AuthWrapper from './auth.styled';
import Logo from '../../../assets/images/tweeter-small.svg';
import { Heading } from '../../../components';
import { useState } from 'react';
import { useAuthContext } from '../../../context/user/userContext';

const LoginModal = ({ closeModal }) => {
  const { isLoading, login, error } = useAuthContext();

  // const [preArrow, setPreArrow] = useState(false);
  const [loginValue, setLoginValue] = useState('');
  const [password, setPassword] = useState('');
  const [activeInput, setActiveInput] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    if (e.target.name === 'loginValue') {
      setLoginValue(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const passwordVisibleHandler = () => {
    setIsVisible(!isVisible);
  };

  const focusHandler = (e) => {
    setActiveInput(e.target.name);
  };

  const blurHandler = () => {
    setActiveInput('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password || !loginValue) {
      alert('Enter all fields');
      return false;
    }
    login({ loginValue, password });
  };

  return (
    <AuthWrapper>
      <div className="header">
        <button className="close" onClick={closeModal}>
          <GrClose />
        </button>
        <img src={Logo} alt="tweeter logo" className="Image-logo" />
      </div>
      <div className="login-content">
        <Heading text="Sign in to Tweeter" tag="h2" />
        <div className="content-buttons mt">
          <div className="google-btn btn mb">
            <span>icon</span>
            <span>Sign up with Apple</span>
          </div>
          <div className="apple-btn btn">
            <span>icon</span>
            <span>Sign up with Apple</span>
          </div>
          <div className="or">
            <div></div>
            <p>or</p>
            <div></div>
          </div>
          <form onSubmit={handleLogin}>
            <div
              className={`formGroup ${
                activeInput === 'username' ? 'activeInput' : ''
              }`}
            >
              <div
                className={`label-counter-box  ${
                  activeInput === 'loginValue' || loginValue ? 'label-up' : ''
                }`}
              >
                <label htmlFor="loginValue">Phone, email, or username</label>
              </div>
              <input
                type="text"
                name="loginValue"
                className="input inputName"
                maxLength="50"
                onChange={handleChange}
                onFocus={focusHandler}
                onBlur={blurHandler}
                value={loginValue}
                id="loginValue"
              />
            </div>
            <div
              className={`passwordInput formGroup ${
                activeInput === 'password' ? 'activeInput' : ''
              }`}
            >
              <div
                className={`label-counter-box  ${
                  activeInput === 'password' || password ? 'label-up' : ''
                }`}
              >
                <label htmlFor="email">password</label>
              </div>
              <input
                type={isVisible ? 'password' : 'text'}
                name="password"
                className="input passwordName"
                maxLength="50"
                onChange={handleChange}
                onFocus={focusHandler}
                onBlur={blurHandler}
                value={password}
                id="password"
              />
              <span
                className="visiblePassword"
                onClick={passwordVisibleHandler}
              >
                {isVisible ? <ImEyeBlocked /> : <ImEye className="eye-color" />}
              </span>
            </div>
            {error && <div className="error">{error}</div>}
            <button
              type="submit"
              className="btn submit-btn"
              disabled={isLoading}
            >
              Submit
            </button>
            <Link to="/login" style={{ marginTop: '5px' }}>
              Forgot password
            </Link>
          </form>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default LoginModal;
