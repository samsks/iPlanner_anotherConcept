import styled from "styled-components";

export const StyledPageContainer = styled.div`
  background: var(--sky-2);
  padding: 10px 20px;
  height: 100vh;

  .asideButtonMenu {
    background-color: var(--color-primary);
    height: 58px;
    width: 180px;
    border-radius: 0 30px 30px 0;
    color: var(--white);
    font-size: 1.5rem;
    display: none;

    top: 100px;
  }

  .isNotVisibleMenu {
    display: none;
  }

  @media (max-width: 1440px) {
    padding: 0;
  }

  @media (max-width: 950px) {
    .asideMobileVersion {
      display: none;
    }

    .asideVisible {
      display: flex;
      position: absolute;
      background-color: var(--white);
      z-index: 10;
    }

    .asideButtonMenu {
      display: block;
      position: absolute;
      top: 35px;
      left: 199px;
      height: 3rem;
      width: 3.5rem;
    }

    .isNotVisibleMenu {
      display: none;
    }
  }
`;

export const StyledContentContainer = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: var(--grey-0);
  width: 100%;
  max-width: 1440px;
  height: 100%;
  box-shadow: 0px 0px 10px var(--grey-2);

  > div {
    background-color: var(--white);
    padding: 20px;
    width: calc(100% - 200px);
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }

  header {
    background-color: var(--white);
    height: 10vh;
  }

  @media (min-width: 1440px) {
    border-radius: 20px;
  }

  @media (max-width: 950px) {
    > div {
      border-radius: 0;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 425px) {
    > div {
      padding: 10px;
    }
    @media (max-width: 865px) {
      flex-direction: column;
    }
  }
`;

export const StyledOutletContainer = styled.div`
  border-radius: 20px;
  background-color: var(--grey-0);
  width: 100%;
  height: 90%;

  @media (max-width: 768px) {
    overflow-y: scroll;
  }
`;

export const StyledAside = styled.aside`
  width: 10vw;
  min-width: 200px;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;

  img {
    margin: 0 auto;
    background: var(--color-primary);
    padding: 27px 18px;
    margin-top: -51px;
    margin-left: 0px;
    border-top-left-radius: 20px;
  }

  @media (max-width: 950px) {
    height: 100vh;
  }

  @media (max-width: 1440px) {
    img {
      border-radius: 0px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  ul > li > a {
    width: 90%;

    padding: 20px;
    font-weight: 600;
    font-size: 18px;
    color: var(--grey-3);
    background: var(--grey-1);
    border-color: var(--grey-3);
    border-radius: 0 24px 24px 0;
    transition: 0.2s;
    &:hover {
      color: var(--grey-1);
      background-color: var(--color-primary);
    }
  }

  .current > a {
    color: var(--grey-1);
    background-color: var(--color-primary);
  }

  button {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;
