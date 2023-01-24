import styled from "styled-components";

export const ModalAddFinancesContainer = styled.div`
  > div {
    width: 100vw;
    height: 100vh;
  }
`;

export const ModalAddFinanceContent = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;

    label {
      flex-direction: column;
      gap: 0.30375rem;
      font-size: 0.75rem;
      font-weight: 700;

      input {
        width: 100%;
        height: 2.125rem;
        border-radius: 1.5625rem;
        border: 1px solid var(--grey-3);
        outline: none;

        font-size: 1rem;
      }

      input::placeholder {
        color: var(--grey-3);
      }
    }

    .selectValueType {
      width: 100%;
      display: flex;
      justify-content: space-between;

      div {
        width: 48%;
        label {
          width: 100%;
        }
      }

      label {
        width: 48%;
        display: flex;

        span {
          width: 50px;
        }

        select {
          width: 100%;
          height: 2.2rem;
          background-color: var(--color-primary);
          color: var(--white);
          border-radius: 0.5rem;
          font-size: 1rem;
          outline: none;
          cursor: pointer;

          * {
            color: var(--grey-5);
            background-color: var(--white);
          }
        }
      }
    }

    .buttonsDiv {
      display: flex;
      justify-content: space-between;
      gap: 15px;

      button {
        padding: 20px 35px;
      }
    }
  }
`;
