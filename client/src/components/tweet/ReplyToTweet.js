import styled from "styled-components";
import { BiImage } from "react-icons/bi";
import Avater from "../Avater";

const ReplyToTweet = ({handleReply,handleReplyFileChange}) => {
  return (
    <Wrapper>
      <Avater alt="user avater" />
      <div className="input-group">
        <form onSubmit={handleReply}>
          <input type="text" placeholder="Tweet your reply sss" name="replyText" />
          <input type="file" id="reply-upload" className="reply-upload" onChange={handleReplyFileChange}/>
          <label htmlFor="reply-upload">
            <BiImage className="image" />
          </label>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .input-group {
    width: 100%;
    background: #fafafa;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    position: relative;
  }

  input {
    background: #fafafa;
    width: 100%;
    padding: 8px;
    border: 1px solid transparent;
    border-radius: 8px;
    outline: none;
    color: #bdbdbd;
    transition: all 0.5s ease;
  }

  input::placeholder {
    font-size: 14px;
    line-height: 19px;

    letter-spacing: -0.035em;

    color: #bdbdbd;
  }

  input:focus {
    border: 1px solid green;
  }

  .image {
    position: absolute;
    right: 15px;
    color: #bdbdbd;
    font-size: var(--clr-neutral-900);
    top: 15px;
  }

  .reply-upload {
    display: none;
  }
`;

export default ReplyToTweet;
