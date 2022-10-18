import styled from 'styled-components';

const EditProfileWrapper = styled.main`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.875rem 3rem;
  width: min(845.91px, 100% - 2rem);
  margin-inline: auto;

  .form {
    margin-bottom: 3rem;
  }

  .form__heading {
    margin-bottom: 1.56rem;
  }

  .form__group {
    margin-bottom: 1.56rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 70%;
  }

  @media (max-width: 55em) {
    padding: 0.8rem;
    .form__group {
      max-width: 100%;
    }
  }
`;

export default EditProfileWrapper;
