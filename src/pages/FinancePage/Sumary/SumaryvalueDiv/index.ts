import styled from "styled-components";

export const SumaryValueDiv = styled.div`
  width: 100%;
  min-width: 256px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6875rem 1.625rem;
  border-radius: 12px;
  background-color: var(--grey-1);

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .description {
    font-size: 1.125rem;
    font-weight: 400;
  }

  .value {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .expenseValue {
    color: var(--color-third);
  }

  .receiptValue {
    color: var(--color-secondary);
  }
`;
