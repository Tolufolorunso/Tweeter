import Wrapper from '../../assets/css/wrappers/Landing.styled';
import Logo from '../../assets/images/tweeter-small.svg';
import Footer from './Footer';
import Main from './Main';

const Landing = () => {
  return (
    <Wrapper>
      <div className="main">
        <div className="image">
          <img src={Logo} alt="tweeter logo" className="Image-logo" />
        </div>
        <div className="content">
          <Main />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Landing;
