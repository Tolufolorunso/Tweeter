import styled from "styled-components";

const TweetWrapper = styled.section`
  background-color: var(--clr-neutral-100);
  padding: 11px 20px;
  border-radius: 8px;
  font-family: var(--ff-secondary);
  /* cursor: pointer; */

  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    /* background-color: rgba(0, 0, 0, 0.7); */
    /* transform: scale(0.97); */
  }

  .header {
    display: flex;
    gap: 1.1rem;
    position: relative;
  }

  .header__title {
    line-height: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .header__more {
    margin-left: auto;
    cursor: pointer;
  }

  .imageWrapper {
    height: 23rem;
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
    /* gap: 1rem; */
    color: #4f4f4f;
  }

  .tweetActions ul {
    /* width: 100%; */
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    letter-spacing: -0.035em;
    font-weight: 500;
    font-size: var(--fs-14);
  }

  .tweetActions ul li {
    display: flex;
    align-items: center;
    gap: var(--fs-12);
    cursor: pointer;
    background-color: transparent;
    border-radius: 8px;
    padding: 0.5rem 0.8rem;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      background-color: #f2f2f2;
    }
  }

  .tweetActions ul li .icons {
    font-size: var(--fs-16);
    color: #4f4f4f;
    pointer-events: none;
  }

  .retweeted,
  .retweeted .icons {
    color: #27ae60 !important;
  }

  .liked,
  .liked .icons {
    color: #eb5757 !important;
  }

  .liked .icons,
  .liked span {
    pointer-events: none;
  }

  .saved {
    color: #2d9cdb;
  }

  .tweetActions-li {
    cursor: pointer;
  }

  .tweet__more {
    position: absolute;
    right: 0;
    top: 20px;
    box-shadow: 0 0 3px 3px rgb(0 0 0 / 30%);
    border-radius: 8px;
    padding: 3px 0.7rem 3px 0.7rem;
    transition: all 0.4s ease;
    opacity: 0;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    /* gap: 2px; */
    z-index: 20;

    button {
      outline: none;
      border: none;
      background-color: transparent;
      cursor: pointer;
      display: inline-block;
      background: transparent;
      padding: 5px 15px;
      transition: all 0.3s ease;
      border-radius: 10px;
      color: #4f4f4f;

      &:hover {
        background-color: #F2F2F2;
      }
    }
  }

  .tweet__more.active-more {
    opacity: 1;
    pointer-events: all;
  }

  @media (max-width: 45em) {
    font-size: var(--fs-14);
    .imageWrapper {
      height: 12rem;
    }

    .tweetActions ul li span {
      display: none;
    }

    .tweetActions ul {
      justify-content: space-between;
    }
  }
`;

export default TweetWrapper;
