import styled from 'styled-components';
import { BiImage, BiWorld } from 'react-icons/bi';
import { Avater, Button, Text } from '../../components';

import AvaterImage from '../../assets/images/landingpageimage.png';

const TweetBox = ({ handleChange }) => {
  const handleTweet = (e) => {
    e.preventDefault();
    alert('Work in progress. Thank you');
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
          <p style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <BiWorld className="footer-icons" />
            <span>Everyone can reply</span>
          </p>
          <Button text="Tweet" style={{ marginLeft: 'auto' }} />
        </div>
      </form>
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
`;

export default TweetBox;
