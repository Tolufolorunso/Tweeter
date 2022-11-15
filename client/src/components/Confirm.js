import styled from "styled-components";

const Confirm = ({ title, action, heading, onClose, handleClick }) => {
  return (
    <Wrapper className="hello">
      <h3 className="heading">{heading}</h3>
      <div className="line"></div>
      <div className="title">{title}</div>
      <div className="line"></div>
      <div className="btn">
        <button onClick={onClose}>Close</button>
        <button onClick={handleClick}>{action}</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* position: fixed;
  top: 15%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: min();
  background-color: #fff;
  z-index: 2000;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-size: 0.7rem;
  color: #4f4f4f;
  padding-block: 8px;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  .hello.confirm {
    transform: translate(-50%, -50%) !important;
  }

  .heading {
    font-size: 1.1rem;
    padding-inline: 1rem;
  }

  .title {
    padding-inline: 1rem;
  }

  .btn {
    display: flex;
    justify-content: flex-end;
    padding-inline: 1rem;
    gap: 0.4rem;
  }

  .btn button {
    border: none;
    outline: none;
    padding: 0.6rem 1rem;
    cursor: pointer;
  }
`;

export default Confirm;
