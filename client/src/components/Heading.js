import styled from 'styled-components';

const Heading = ({ size, text, tag, className }) => {
  return (
    <Wrapper size={size} as={tag} className={className}>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: var(--ff-heading);
  font-size: ${(prop) => (prop.size ? prop.size + 'rem' : '1rem')};
`;

export default Heading;
