import styled from "styled-components";

export const StyledSelectDefault = styled.div`
  display: flex;
  align-items: center;

  & > label {
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    margin-right: 10px;
    color: var(--grey-3);
  }

  & > select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;
    gap: 8px;
    font-size: 1.25rem;
    width: fit-content;
    height: 2rem;
    outline: none;
    background: var(--color-primary);
    color: var(--white);
    border: none;
    border-radius: 8px;
    cursor: pointer;

    & > * {
      background-color: var(--white);
    }
  }

  & > select:hover {
    background-color: var(--color-primary-99);
  }
`;
