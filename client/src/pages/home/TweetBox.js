import styled from 'styled-components';
import { BiImage, BiWorld } from 'react-icons/bi';
import { Avater, Button, Text } from '../../components';

import AvaterImage from '../../assets/images/landingpageimage.png';
import { useState } from 'react';

const TweetBox = ({ handleChange }) => {
  let [canReply, setCanReply] = useState('everyone');
  let [isCanReplyOpen, setIsCanReplyOpen] = useState(false);

  const handleTweet = (e) => {
    e.preventDefault();
    alert('Work in progress. Thank you');
  };

  const handleCanReply = (e) => {
    setCanReply(e.target.value);
    setIsCanReplyOpen(!isCanReplyOpen);
  };

  const handleEveryoneReply = () => {
    setIsCanReplyOpen(!isCanReplyOpen);
  };

  return (
    <Wrapper>
      <Text title="Tweet something" tag="h3" style={{ color: '#4F4F4F' }} />
      <div className="line"></div>
      <form onSubmit={handleTweet}>
        <div className="input-box">
          <Avater src={AvaterImage} alt="user avater" />
          <textarea
            onChange={handleChange}
            className="tweetbox"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="footer">
          <label htmlFor="upload">
            <BiImage className="footer-icons" />
            <input
              type="file"
              className="upload"
              name="tweet-image"
              id="upload"
            />
          </label>
          <p
            style={{
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={handleEveryoneReply}
          >
            <BiWorld className="footer-icons" />
            <span>{canReply} can reply</span>
          </p>
          <Button text="Tweet" style={{ marginLeft: 'auto' }} />
        </div>
      </form>
      {!isCanReplyOpen || (
        <div className="can-reply">
          <Text title="Who can reply" tag="h3" />
          <Text title="Choose who can reply to this Tweet" tag="p" fs="0.75" />
          <label htmlFor="everyone">
            Everyone
            <input
              type="radio"
              name="replyTo"
              id="everyone"
              value="everyone"
              onChange={handleCanReply}
            />
          </label>
          <label htmlFor="followers">
            People you follow
            <input
              type="radio"
              name="replyTo"
              id="followers"
              value="followers"
              onChange={handleCanReply}
            />
          </label>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-neutral-100);
  padding: 11px 20px;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  font-family: var(--ff-secondary);
  font-size: var(--fs-12);
  position: relative;

  .input-box {
    display: flex;
    gap: 12px;
  }
  .tweetbox {
    width: 100%;
    outline: none;
    border: 1px solid transparent;
    padding: 5px 10px;
    height: 45px;
  }

  .tweetbox:focus {
    border: 1px solid #bdbdbd;
    border-radius: 3px;
  }

  .footer {
    color: var(--clr-primary-400);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 20px;
  }

  .footer-icons {
    font-size: 1.2rem;
  }
  .footer .upload {
    display: none;
  }

  .footer label {
    cursor: pointer;
  }

  .footer label:hover {
    opacity: 0.8;
  }

  .can-reply {
    background-color: var(--clr-neutral-100);
    width: 234.37px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    position: absolute;
    left: 55px;
    top: 170px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .can-reply label {
    display: block;
    width: 100%;
    background: #f2f2f2;
    color: #4f4f4f;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }

  .can-reply p {
    color: #828282;
    font-weight: 400;
    font-size: var(--fs-12);
  }

  .can-reply label:hover {
    opacity: 0.8;
  }

  .can-reply label input {
    display: none;
  }
`;

export default TweetBox;