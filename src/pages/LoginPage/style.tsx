import styled from "styled-components";

export const StyledPageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--grey-0);

  .formLoginDiv {
    width: 90%;
    max-width: 25rem;
    border: 2px solid var(--color-primary);
    border-radius: 24px;
    height: 485px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    .containerFormLoginDiv {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .divLogo {
      width: 100%;
      height: 130px;
      padding: 15px;
      border-radius: 20px 20px 0px 0px;
      background-color: var(--color-primary);
      display: flex;
      justify-content: center;
    }

    .divPadding {
      width: 80%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 2.25rem;

      .inputsArea {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        font-size: 16px;
      }

      .inputsArea label input {
        font-size: 16px;
      }

      .text-3 {
        font-size: 14px;
        font-weight: 400;
        color: var(--grey-3);
        text-align: center;

        margin-top: 1.94rem;
        margin-bottom: 0.2rem;
      }

      .text-3-blue {
        font-size: 14px;
      }

      a {
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--color-primary);
        text-align: center;
        margin-bottom: 1.44rem;
      }

      .button-submit {
        height: 3rem;
        width: 100%;
        margin-top: 10px;
        max-width: 100%;
        font-size: 20px;
      }
    }
    .formlogin p {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;
