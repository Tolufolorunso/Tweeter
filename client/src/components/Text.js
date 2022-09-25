import styled from 'styled-components';

const Text = ({ title, tag, fs, style }) => {
  return (
    <Wrapper as={tag} fs={fs} style={style}>
      {title}
    </Wrapper>
  );
};

const Wrapper = styled.p`
  font-size: ${(prop) => prop.fs + 'rem' || '1rem'};
`;

export default Text;
