import styled from 'styled-components';
import { BiImage, BiWorld } from 'react-icons/bi';
import { Avater, Text } from '../../components';

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
          <button className="btn">Tweet</button>
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

  .line {
    height: 1px;
    width: 100%;
    background-color: #e0e0e0;
    margin-block: 8px;
  }

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

  .btn {
    background-color: var(--clr-primary-400);
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 7px 20px;
    color: white;
    font: inherit;
    letter-spacing: 1px;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn:hover,
  .footer label:hover {
    opacity: 0.8;
  }
`;

export default TweetBox;
