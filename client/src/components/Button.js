import styled from 'styled-components';

const Button = ({ text, size, radius, bgColor, color, icon }) => {
  return (
    <Wrapper size={size} radius={radius} bgColor={bgColor} color={color}>
      {icon ? <span>{icon}</span> : null} {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding: 10px 20px;
  border-radius: ${(prop) => (prop.radius ? prop.radius + 'px' : '4px')};
  background-color: ${(prop) => (prop.bgColor ? prop.bgColor : '#2F80ED')};
  color: ${(prop) => (prop.color ? prop.color : '#fff')};
  outline: none;
  border: none;
  font: inherit;
`;

export default Button;
