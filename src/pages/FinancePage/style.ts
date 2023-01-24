import styled from "styled-components";

export const CountsSection = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 1.4rem;
  width: 100%;

  .selectZone {
    width: 40%;
  }

  .viewFinaceItensZone {
    width: 54.5%;
    height: 100%;

    .viewFinaceItensZone__addSelectors {
      display: flex;
      justify-content: space-between;
    }
  }

  @media (max-width: 1050px) {
    .selectZone > .divYearMonth {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .viewFinaceItensZone {
      width: 57%;
    }
  }

  @media (max-width: 1010px) {
    .viewFinaceItensZone {
      width: 59%;
    }
  }

  @media (max-width: 980px) {
    padding: 10px;
  }

  @media (max-width: 950px) {
    .viewFinaceItensZone {
      width: 55%;
    }
  }

  @media (max-width: 810px) {
    .viewFinaceItensZone {
      width: 58%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;

    .selectZone {
      width: 90%;
    }

    .viewFinaceItensZone {
      width: 90%;
    }

    .selectZone > .divYearMonth {
      flex-direction: row;
    }
  }

  @media (max-width: 525px) {
    .selectZone {
      width: 100%;
    }

    .viewFinaceItensZone {
      width: 100%;
    }
  }

  @media (max-width: 475px) {
    .viewFinaceItensZone__addSelectors {
      flex-direction: column-reverse;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 15px;
    }

    .selectors > div {
      margin-left: -15px;
    }

    .button-small {
      margin-right: -15px;
    }
  }

  @media (max-width: 390px) {
    .selectZone > .divYearMonth {
      flex-direction: column;
      gap: 15px;
      align-items: center;
    }

    .selectors > div {
      flex-direction: column;
      gap: 8px;
      align-items: center;
    }
  }

  * {
    scrollbar-width: auto;
    scrollbar-color: var(--grey-2) #ffffff;
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--grey-2);
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`;
