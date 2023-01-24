import { ExpenseReceiptValue } from "./ExpenseReceiptValue";
import { TotalValue } from "./ExpenseTotalValue";
import { RealExpenseReceiptValue } from "./RealExpenseReceiptValue";
import { RealTotalValue } from "./RealTotalValue";
import { SumaryDiv } from "./styles";

export const Sumary = () => {
  return (
    <SumaryDiv>
      <h2>Previsto</h2>
      <ExpenseReceiptValue />
      <TotalValue />
      <h2>Real</h2>
      <RealExpenseReceiptValue />
      <RealTotalValue />
    </SumaryDiv>
  );
};
