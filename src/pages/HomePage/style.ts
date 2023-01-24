import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 20px 25px;

  h2 {
    margin-bottom: 15px;
  }

  ul {
    height: 105%;
  }

  img {
    max-height: 300px;
  }

  > h1 {
    font-weight: 700;
    font-size: 30px;
  }

  > div {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .divFinanceTask {
    height: 65%;
  }

  .divForgetAlarm {
    height: 35%;
  }

  section {
    background-color: white;
    border: 1px solid var(--grey-2);
    border-radius: 16px;
    box-shadow: 0 0 5px var(--grey-1);
    padding: 15px;
  }

  @media (max-width: 768px) {
    height: unset;

    > div {
      flex-direction: column;
    }
  }

  @media (max-width: 425px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 320px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const StyledFinanceSection = styled.section`
  width: 45%;
  height: 100%;

  #ul::-webkit-scrollbar {
    width: 10px;
  }

  #ul::-webkit-scrollbar-track {
    background: var(--grey-0);
    border: 2px solid var(--grey-0);
  }

  #ul::-webkit-scrollbar-thumb {
    background-color: var(--sky-2);
    border-radius: 20px;
    border: 2px solid var(--grey-0);
  }

  .container {
    width: 100%;
    height: 90%;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;

export const StyledTaskSection = styled.section`
  width: 55%;
  height: 100%;

  #ul::-webkit-scrollbar {
    width: 10px;
  }

  #ul::-webkit-scrollbar-track {
    background: var(--grey-0);
    border: 2px solid var(--grey-0);
  }

  #ul::-webkit-scrollbar-thumb {
    background-color: var(--sky-2);
    border-radius: 20px;
    border: 2px solid var(--grey-0);
  }

  .container {
    width: 100%;
    height: 90%;

    form {
      display: none;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
      overflow-x: auto;

      div > div {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }

  ul {
    max-height: 200%;
  }
`;

export const StyledDoNotForgetSection = styled.section`
  width: 60%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    margin-top: -15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

export const StyledAlarmSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 250px;
  height: 100%;

  .divAux {
    min-height: 160px;
    max-height: 160px;
  }

  ul::-webkit-scrollbar {
    width: 10px;
  }

  ul::-webkit-scrollbar-track {
    background: var(--grey-0);
    border: 2px solid var(--grey-0);
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--sky-2);
    border-radius: 20px;
    border: 2px solid var(--grey-0);
  }

  .imgAlarm {
    height: 170px;
    width: 100%;
  }

  > ul > li {
    width: 100%;
    height: 162px;
  }

  @media (max-width: 768px) {
    width: 100%;

    > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 7px;
    }

    > ul > li {
      width: 80%;
    }
  }
`;

export const StyledLinkHome = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
