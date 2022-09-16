import { Heading } from '../../components';
import Logo from '../../assets/images/tweeter-small.svg';

const Main = () => {
  return (
    <>
      <img src={Logo} alt="tweeter logo" className="content-logo" />
      <Heading
        text="Happening now"
        tag="h1"
        className="main__heading mb mt-6"
      />
      <div className="half mt-6">
        <Heading text="Join Tweeter today." tag="h2" size={3} className="hi" />
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
          <div className="email-btn btn">
            <span>Sign up with phone or email</span>
          </div>
          <div className="term">
            By signing up, you agree to the{' '}
            <a href="http://tweeter.com/" rel="noreferrer" target="_blank">
              <span>Terms of Service</span>
            </a>{' '}
            and{' '}
            <a href="http://tweeter.com/" rel="noreferrer" target="_blank">
              <span>Privacy Policy</span>
            </a>
            , including{' '}
            <a href="http://tweeter.com/" rel="noreferrer" target="_blank">
              <span>Cookie Use.</span>
            </a>
          </div>
        </div>
        <p className="have-account">Already have an account?</p>
        <div className="email-btn btn">
          <span>Login</span>
        </div>
      </div>
    </>
  );
};

export default Main;
