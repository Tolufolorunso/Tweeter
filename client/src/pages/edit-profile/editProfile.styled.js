import styled from 'styled-components';

const EditProfileWrapper = styled.main`
  .form {
    margin-bottom: 3rem;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 1.875rem 3rem;
    width: min(845.91px, 100% - 2rem);
    margin-inline: auto;
  }

  .form__heading {
    margin-bottom: 1.56rem;

    h3 {
      font-weight: 400;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: -0.035em;

      color: #000000;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: -0.035em;

      color: #828282;
    }
  }

  .form__group {
    margin-bottom: 1.56rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 70%;
  }

  .forum__group--input {
    border: 1px solid #828282;
    border-radius: 12px;
    outline: none;
    padding: 0.7rem 0.9rem;
  }

  .forum__group--input::placeholder,
  .form__group--label {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
  }

  .form__group--btn {
    background: #2f80ed;
    border-radius: 8px;
    width: fit-content;
    color: #fff;
    border: none;
    outline: none;
    padding: 0.6rem 1.5rem;
    cursor: pointer;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
  }

  .form__group--btn:hover {
    opacity: 0.8;
  }

  @media (max-width: 55em) {
    padding: 0.8rem;
    .form__group {
      max-width: 100%;
    }
  }
`;

export default EditProfileWrapper;
