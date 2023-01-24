import styled from "styled-components";

export const StyledModal = styled.div`
  margin: 0 auto;
  position: absolute;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  z-index: 10;
  top: 40%;

  .delete-modal-content {
    width: 350px;
    max-width: 90%;
    background-color: var(--grey-0);
    border: 1px solid var(--color-third);
    display: flex;
    flex-direction: column;
    border-radius: 14px;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--color-third);

    button {
      background-color: var(--color-third);
    }
  }

  .modal-children {
    p {
      color: var(--grey-3);
      text-align: center;
      margin-bottom: 20px;
    }

    div {
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    button {
      width: 130px;
      color: var(--color-third);
      border-color: var(--color-third);
      &:hover {
        color: var(--grey-0);
        background-color: var(--color-third);
        border-color: var(--color-third);
      }
    }
  }
`;
