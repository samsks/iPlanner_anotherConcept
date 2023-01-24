import styled from "styled-components";

export const SelectorsDiv = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 1.5rem;

  .button-small {
    font-size: 16px;
    font-weight: 600;
    border-radius: 25px;
    border: 2px solid var(--grey-3);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--grey-3);
    transition: 0.3s;
    height: 32px;
    padding: 1rem;
    background-color: var(--white);
  }

  .button-small:hover {
    background-color: var(--grey-2);
  }

  .button-blue {
    color: var(--white);
    background-color: var(--color-primary);
    border: 2px transparent;
  }

  .button-blue:hover {
    background-color: var(--color-primary-99);
  }
`;
