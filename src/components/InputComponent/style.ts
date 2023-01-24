import styled from "styled-components";

export const StyledFormInput = styled.div`
  label {
    width: 100%;
  }

  input {
    outline: none;
    background-image: var(--grey-1);
    height: 2.125rem;
    padding: 0px 1rem;
    gap: 5px;
    width: 100%;
    height: 48px;
    font-weight: 400;
    font-size: 16px;
    background: var(--grey-0);
    color: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 16px;
  }

  input:focus {
    border-color: var(--color-primary);
  }

  span {
    position: absolute;
    color: var(--color-third);
    padding-top: 5px;
    font-size: 80%;
    margin-left: 15px;
  }

  & > label {
    & > input {
      height: 36px;
      font-weight: 400;
      font-size: 15px;
      border-radius: 16px;
    }
  }
`;
