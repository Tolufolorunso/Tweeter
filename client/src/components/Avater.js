import styled from 'styled-components';

const Avater = ({ src, alt }) => {
  return (
    <Wrapper>
      <img src={src} alt={alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 40px;
  width: 50px;

  img {
    width: 100%;
    min-height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 3px;
  }
`;

export default Avater;
