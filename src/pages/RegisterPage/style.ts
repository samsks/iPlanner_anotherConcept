import styled from "styled-components";

export const StyledPageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--grey-0);

  .formRegisterDiv {
    width: 90%;
    max-width: 23rem;
    max-height: 680px;
    min-height: 680px;
    border: 2px solid var(--color-primary);
    border-radius: 24px;
    padding: 2.06rem 0 3.68rem 0;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    .divPadding {
      width: 95%;
      max-width: 16rem;
      max-height: 600px;
      display: flex;
      flex-direction: column;
      gap: 2.25rem;

      .button-small {
        height: 2rem;
        width: fit-content;
        padding: 0 20px 0 20px;
        align-self: flex-end;
      }

      .inputsArea {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .text-3 {
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--grey-3);
        text-align: center;

        margin-top: 1.94rem;
        margin-bottom: 0.2rem;
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
        max-width: 100%;
      }

      .buttonReturn {
        color: var(--grey-3);
        border: 1px solid var(--grey-3);
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
        width: 85px;
        height: 40px;
        margin: 0px;
        transition: 0.3s;
      }

      .buttonReturn:hover {
        color: var(--grey-0);
        border-color: var(--color-primary);
        background-color: var(--color-primary);
      }

      .divButtonReturn {
        display: flex;
        justify-content: end;
      }
    }
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: var(--grey-5);
  text-align: center;
`;
