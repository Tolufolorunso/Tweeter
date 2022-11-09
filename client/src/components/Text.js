import styled from 'styled-components';

const Text = ({ title, tag, fs, style,onClick }) => {
  return (
    <Wrapper as={tag} fs={fs} style={style} onClick={onClick}>
      {title}
    </Wrapper>
  );
};

const Wrapper = styled.p`
  font-size: ${(prop) => (prop.fs ? prop.fs + 'rem' : '1rem')};
  color: #4f4f4f;
`;

export default Text;
