import styled from 'styled-components';

const Button = ({ text, size, radius, bgColor, color, icon, style }) => {
  return (
    <Wrapper
      size={size}
      radius={radius}
      bgColor={bgColor}
      color={color}
      style={style}
    >
      {icon ? <span>{icon}</span> : null} <span>{text}</span>
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
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
