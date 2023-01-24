import styled from "styled-components";

export const ListFinanceDiv = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-height: 90%;
  overflow: auto;

  li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    min-width: 283px;
    border: 1px solid var(--grey-1);
    border-radius: 12px;
    padding: 1rem 1.8rem 1rem 1.6rem;

    .financeItemCard__texts {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 46.2%;

      .financeItemCard__texts__typeDate {
        display: flex;
        justify-content: space-between;
        gap: 0.4rem;
      }
    }

    .priceConfirm {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      min-width: 7.5rem;
    }

    .trashButton {
      height: 20px;
      background-color: transparent;
    }
  }
  .borderRed {
    border-left: 1.2rem solid var(--color-third);
    border-right: 0.5rem solid var(--color-third);
  }
  .borderGreen {
    border-left: 1.2rem solid var(--color-secondary);
    border-right: 0.5rem solid var(--color-secondary);
  }
`;
