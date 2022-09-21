import AuthWrapper from './auth.styled';
import { GrClose } from 'react-icons/gr';
import { ImEyeBlocked, ImEye } from 'react-icons/im';

import Logo from '../../../assets/images/tweeter-small.svg';
import { Heading } from '../../../components';
import { useState } from 'react';

const LoginModal = ({ closeModal }) => {
  // const [preArrow, setPreArrow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeInput, setActiveInput] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
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
    if (!password || !username) {
      alert('enter all fields');
      return false;
    }

    alert(password + ' ' + username);
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
                  activeInput === 'username' || username ? 'label-up' : ''
                }`}
              >
                <label htmlFor="username">Phone, email, or username</label>
              </div>
              <input
                type="text"
                name="username"
                className="input inputName"
                maxLength="50"
                onChange={handleChange}
                onFocus={focusHandler}
                onBlur={blurHandler}
                value={username}
                id="username"
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

            <button type="submit" className="btn submit-btn">
              Submit
            </button>
            <button
              type="button"
              className="btn submit-btn"
              style={{ marginTop: '5px' }}
            >
              Forgot password
            </button>
          </form>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default LoginModal;
