import styled from "styled-components";

export const StyledResume = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  max-width: 310px;
  height: 100%;
  background-color: var(--grey-1);
  border-radius: 12px;
  padding: 12px;
  font-size: 20px;
  position: relative;

  .default-list {
    height: 30%;
  }

  .user-list {
    height: 70%;
  }

  .user-list {
    display: flex;
    justify-content: space-around;
    gap: 12px;
    flex-direction: column;
    overflow-y: auto;

    li {
      display: flex;
      justify-content: space-between;

      cursor: pointer;
      &:hover p {
        font-weight: 600;
      }
    }
  }

  .user-list {
    display: flex;
    flex-direction: column;
    justify-content: unset;
    border-top: 1px solid var(--grey-3);
    padding: 1rem 0;
    max-height: 62%;
    overflow-x: hidden;
  }

  .new-list {
    display: none;
    align-items: center;
    align-self: center;
    gap: 12px;
    position: absolute;
    bottom: 10px;
    cursor: pointer;

    > div {
      font-size: 1.5rem;
    }
  }

  .listaDestaque {
    * {
      color: var(--color-primary);
      font-weight: 700;
      margin-left: 8px;
    }

    @media (max-width: 1100px) {
      width: 60%;
    }

    @media (max-width: 570px) {
      width: 100%;
      max-width: unset;
    }
  }
`;
