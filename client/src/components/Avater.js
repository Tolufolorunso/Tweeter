import styled from 'styled-components';

const Avater = ({ src, alt }) => {
  return (
    <Wrapper>
      <img src={src} alt={alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50px;
  width: 50px;

  img {
    width: 100%;
    display: inline-block;
    object-fit: cover;
    border-radius: 3px;
  }
`;

export default Avater;
