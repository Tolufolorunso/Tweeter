import styled from 'styled-components';
import BGImage from '../../images/landingpageimage.png';

const Wrapper = styled.main`
  .main {
    display: flex;
    min-height: 750px;
    height: 100vh;
  }
  .main__heading {
    font-size: clamp(2.5rem, 4vw, 4rem);
    font-weight: 700;
  }

  /* All Content style */
  .content {
    flex: 1;
    padding: 1.25rem 2rem;

    .content-logo {
      margin-bottom: var(--size-400);
    }

    .half {
      width: 100%;
      max-width: 380px;
    }

    .hi {
      font-weight: 700;
      font-size: 1.4375rem;
    }

    .term {
      margin-top: 0.2rem;
      font-size: 0.8rem;
      font-weight: 300;
      color: rgb(83, 100, 113);
    }

    .term a {
      color: var(--clr-primary-400);
    }
  }

  .image {
    flex: 1;
    background-image: url(${BGImage});
    background-position: center;
    background-size: cover;
    min-height: 300px;
    display: flex;
    justify-content: center;

    .Image-logo {
      filter: brightness(0) invert(1);
      width: 40%;
    }
  }

  .btn {
    font: inherit;
    padding: 10px 30px;
    border-radius: 30px;
    text-align: center;
    color: var(--clr-neutral-100);
    cursor: pointer;
    border: none;
    transition: all 0.3s ease-in;
  }

  .google-btn,
  .apple-btn {
    color: var(--clr-neutral-900);
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .apple-btn:hover {
    background-color: var(--clr-neutral-800);
  }

  .email-btn {
    background-color: #2f80ed;
  }
  .or {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 300;
    margin-block: 7px;
  }

  .or p {
    margin-top: -2px;
  }

  .or div {
    height: 1px;
    width: 100%;
    background-color: #ccc;
  }

  .have-account {
    margin-top: 4.5rem;
  }

  @media (max-width: 50em) {
    .main {
      flex-direction: column-reverse;
    }
  }
`;

export default Wrapper;
