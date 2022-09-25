import styled from 'styled-components';

const TweetWrapper = styled.section`
  background-color: var(--clr-neutral-100);
  padding: 11px 20px;
  border-radius: 8px;
  font-family: var(--ff-secondary);

  .header {
    display: flex;
    gap: 1.1rem;
  }

  .header__title {
    line-height: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .imageWrapper {
    height: 375.73px;
  }
  img {
    width: 100%;
    height: 100%;
    display: inline-block;
    object-fit: cover;
    border-radius: 5px;
  }

  .tweetInfo {
    color: #bdbdbd;
    display: flex;
    justify-content: flex-end;
    letter-spacing: -0.035em;
    font-weight: 500;
    font-size: var(--fs-12);
  }

  .tweetInfo ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .tweetActions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #4f4f4f;
  }

  .tweetActions ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    letter-spacing: -0.035em;
    font-weight: 500;
    font-size: var(--fs-14);
  }

  .tweetActions ul li {
    display: flex;
    align-items: center;
    gap: var(--fs-12);
  }

  .tweetActions ul li .icons {
    font-size: var(--fs-16);
  }

  .retweeted {
    color: #27ae60;
  }

  .liked {
    color: #eb5757;
  }

  .saved {
    color: #2d9cdb;
  }
`;

export default TweetWrapper;
