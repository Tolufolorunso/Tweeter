import styled from 'styled-components';

const ProfileWrapper = styled.main`
  margin-top: -1.5rem;

  .cover-picture {
    height: 294px;
    /* background-color: red; */
  }

  .cover-picture img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: inline-block;
  }

  .profile-detail {
    min-height: 163px;
    background-color: var(--clr-neutral-100);
    position: relative;
    margin-top: -60px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .profile-detail__content {
    /* width: 100%; */
  }

  .profile-detail__content .content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* .content div {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: var(--fs-12);
  } */

  .follow-btn {
    margin-left: auto;
  }

  .home {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1.5625rem;
    align-self: flex-start;
    margin-top: 25px;
  }

  .aside {
    height: fit-content;
    border-radius: 8px;
    padding: 8px 0 8px 0;
  }

  .aside__lists {
    list-style: none;
    display: flex;
    flex-direction: column;
    /* gap: 1.5rem; */
  }

  .aside__lists li {
    padding-block: 5px;
    height: 30px;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    font-size: var(--fs-14);
    line-height: 21px;
    letter-spacing: -0.035em;
    color: #828282;
    transition: all 0.4s ease-in;
  }

  .aside__lists li::before {
    content: '';
    height: 100%;
    width: 2px;
    /* background-color: var(--clr-primary-400); */
  }

  .aside__lists li:hover {
    background-color: var(--clr-primary-400);
    color: var(--clr-neutral-100);
    opacity: 0.8;
  }

  .aside__lists li.aside__active {
    color: var(--clr-primary-400);
  }

  .aside__lists li.aside__active:hover {
    color: var(--clr-neutral-100);
  }

  .aside__lists li.aside__active::before {
    content: '';
    height: 100%;
    width: 2px;
    border-radius: 30px;
    background-color: var(--clr-primary-400);
  }

  @media (max-width: 45em) {
    .cover-picture {
      height: 150px;
    }
    .home {
      grid-template-columns: 1fr;
    }
    .profile-detail {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .profile-detail__content .content {
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
    }
    .profile-detail__content .follow-btn {
      margin-right: 0;
    }
  }
`;

export default ProfileWrapper;
