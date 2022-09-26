import styled from 'styled-components';
import DefaultImage from '../assets/images/landingpageimage.png';

const Avater = ({ src, alt, style }) => {
  return (
    <Wrapper style={style}>
      <img src={src || DefaultImage} alt={alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 40px;
  width: 40px;

  img {
    width: 100%;
    min-height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 3px;
  }
`;

export default Avater;
