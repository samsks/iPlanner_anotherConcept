import styled from "styled-components";

export const StyledTaskList = styled.div`
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
  }

  .new-task {
    display: flex;
    align-items: center;
    gap: 30px;
    border-radius: 8px;
    height: 60px;
    padding: 20px 15px;
    width: 100%;
    background-color: var(--grey-1);

    button {
      font-size: 1.5rem;
      background-color: var(--grey-1);
    }

    input {
      width: 100%;
      height: 100%;
      background-color: var(--grey-1);
      border: 2px solid var(--grey-1);
    }

    input:focus {
      border: 2px solid var(--grey-1);
      outline: none;
    }
  }

  .grey {
    color: var(--grey-2);
    &:hover {
      color: var(--color-primary);
      transition: 0.5s ease;
      scale: 1.3;
    }
  }

  .blue {
    color: var(--color-primary);
    &:hover {
      color: var(--grey-2);
      transition: 0.5s ease;
      scale: 1.3;
    }
  }
`;
