import styled from "styled-components";

export const StyledContainerUl = styled.ul`
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  overflow-x: auto;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 75px;
    border: 1px solid var(--grey-1);
    border-radius: 12px;
    padding: 0.9375rem 1.875rem 0.9375rem 1.625rem;
    display: flex;
  }

  .subTitle {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
  }

  .subMenu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 90px;
  }

  .trashIcon:hover {
    color: var(--color-third);
  }

  .buttonDeletefinance {
    cursor: pointer;
    background-color: transparent;
  }

  .despesa {
    border-left: 1.1875rem solid var(--color-third);
    border-right: 0.534375rem solid var(--color-third);
  }

  .recebimento {
    border-left: 1.1875rem solid var(--color-secondary);
    border-right: 0.534375rem solid var(--color-secondary);
  }
`;
