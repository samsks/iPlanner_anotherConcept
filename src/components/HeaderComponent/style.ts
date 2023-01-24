import styled from "styled-components";

const StyledHeader = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;

  .asideButton {
    background-color: var(--color-primary);
    height: 3rem;
    width: 3.5rem;
    border-radius: 0 45% 45% 0;
    color: var(--white);
    font-size: 1.5rem;
    display: none;
  }

  .isNotVisible {
    display: none;
  }

  @media (max-width: 950px) {
    padding: 15px 5px;

    .asideButton {
      display: block;
      position: absolute;
      left: 0;
    }

    .isNotVisible {
      display: none;
    }
  }
`;

export default StyledHeader;
