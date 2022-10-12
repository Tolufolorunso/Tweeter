import styled from 'styled-components';

const Avater = ({ src, name, alt, style }) => {
  return (
    <Wrapper style={style}>
      {src ? <img src={src} alt={alt} /> : <span>TK</span>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-radius: 50%;

  img {
    width: 100%;
    min-height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 3px;
    overflow: hidden;
  }
`;

export default Avater;
