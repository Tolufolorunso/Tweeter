import styled from 'styled-components';

const Text = ({ title, tag, fs }) => {
  return (
    <Wrapper as={tag} fs={fs}>
      {title}
    </Wrapper>
  );
};

const Wrapper = styled.p`
  font-size: ${(prop) => prop.fs + 'rem' || '1rem'};
`;

export default Text;
