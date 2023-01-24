import styled from "styled-components";

export const StyledAddAlarm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .divHour {
    width: 285px;
    height: 110px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-2);
  }

  .timeInput {
    background-color: var(--grey-2);
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 4rem;
  }

  .divInputs {
    display: flex;
    font-weight: 700;
    font-size: 55px;
    line-height: 71px;
  }

  .divBtnArrow {
    display: flex;
    gap: 80px;
    margin-left: -20px;
    margin-bottom: -5px;
  }

  .divDown {
    margin-right: -3px;
    margin-top: -5px;
  }

  .btnArrow {
    background-color: var(--grey-2);
    cursor: pointer;
  }

  .inputHour {
    background-color: var(--grey-2);
    width: 75px;
    font-weight: 700;
    font-size: 55px;
    line-height: 71px;
    ::placeholder {
      color: var(--grey-5);
    }
  }

  .minute {
    margin-left: 10px;
  }

  .hour {
    margin-right: -5px;
  }

  .ulDaysWeek {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  .liDaysWeek {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 15px;
    border: 1px solid var(--grey-3);
    color: var(--grey-3);
    cursor: pointer;
    &:hover {
      background-color: var(--color-primary);
      color: var(--white);
      border-color: var(--color-primary);
    }
  }

  .divSaveOrCancel {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .divSaveOrCancel > button {
    padding: 10px 13%;
    background-color: var(--grey-0);
    border: 1px solid var(--grey-3);
    color: var(--grey-3);
    border-radius: 25px;
    cursor: pointer;
    &:hover {
      background-color: var(--color-primary);
      color: var(--white);
      border-color: var(--color-primary);
    }
  }

  .inputAux {
    display: none;
  }
`;
