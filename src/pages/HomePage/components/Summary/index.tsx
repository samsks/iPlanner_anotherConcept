import { ExpenseReceiptValue } from "../../../FinancePage/Sumary/ExpenseReceiptValue";
import { TotalValue } from "../../../FinancePage/Sumary/ExpenseTotalValue";
import { RealTotalValue } from "../../../FinancePage/Sumary/RealTotalValue";
import { StyledContainerDiv } from "./style";

export const Summary = () => {
  return (
    <StyledContainerDiv>
      <ExpenseReceiptValue />
      <TotalValue />
      <RealTotalValue />
    </StyledContainerDiv>
  );
};
