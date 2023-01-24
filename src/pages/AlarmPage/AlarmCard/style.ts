import styled from "styled-components";

const StyledAlarmCard = styled.li`
  width: 32.4%;
  background-color: var(--grey-1);
  border-radius: 16px;
  cursor: pointer;
  position: relative;

  .toggle-btn {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .divAux {
    padding: 20px;
  }

  .alarmTime {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 700;
    font-size: 52px;
  }

  .countdown {
    margin: 10px 0;
    display: flex;
    gap: 9px;
    font-weight: 300;
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .countdown span {
    font-size: unset;
    font-weight: bolder;
    color: black;
    height: 21px;
    width: 19px;
  }

  .countdown span svg {
    color: black;
    height: 21px;
    width: 25px;
    font-weight: lighter;
  }

  .countdown > span {
    color: var(--grey-3);
  }

  .description {
    font-weight: 700;
    font-size: 20px;
    width: 85%;
    max-height: 30px;
    font-weight: 700;
    font-size: 20px;
    margin-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .slider {
    background: var(--grey-3);
    width: 45px;
    height: 25px;
    border: 1px solid var(--grey-1);
    border-radius: 255px;
    cursor: pointer;
  }

  .btnAlarm {
    background: var(--grey-1);
    border: none;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    pointer-events: none;
    margin-top: 2px;
    margin-left: 2px;
    transition: 0.3s ease;
  }

  .toogle-input:checked ~ .slider {
    background: var(--color-secondary);
  }

  .toogle-input:checked ~ .slider > .btnAlarm {
    transition: 0.3s ease;
    margin-left: 22px;
  }

  .toogle-input {
    display: none;
  }

  .btnDelete {
    font-size: 22px;
    margin-top: 8px;
    cursor: pointer;
  }

  @media (max-width: 1355px) {
    width: 32.2%;
  }

  @media (max-width: 1165px) {
    width: 49.1%;
  }

  @media (max-width: 1115px) {
    width: 48.9%;
  }

  @media (max-width: 965px) {
    width: 48.7%;
  }

  @media (max-width: 950px) {
    width: 49.1%;
  }

  @media (max-width: 840px) {
    width: 48.7%;
  }

  @media (max-width: 670px) {
    width: 100%;
  }
`;

export default StyledAlarmCard;
