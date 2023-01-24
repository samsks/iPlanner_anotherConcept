import { useContext } from "react";
import { FinancesContext } from "../../../../contexts/FinancesContext";
import { SumaryValueDiv } from "../SumaryvalueDiv";

export const RealExpenseReceiptValue = () => {
  const { filteredFinanceItens } = useContext(FinancesContext);
  const totalSumaryValue = filteredFinanceItens.reduce(
    (acomulator, financeItem) =>
      financeItem.isAccomplished === true && financeItem.fitemType === "despesa" ? acomulator + financeItem.fitemValue : acomulator,
    0
  );

  const totalReceiptValue = filteredFinanceItens.reduce(
    (acomulator, financeItem) =>
      financeItem.isAccomplished === true && financeItem.fitemType !== "despesa" ? acomulator + financeItem.fitemValue : acomulator,
    0
  );

  return (
    <SumaryValueDiv>
      <div>
        <span className="description">Total dos recebimentos</span>
        <span className={`value ${totalReceiptValue != 0 && "receiptValue"}`}>
          {totalReceiptValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div>
        <span className="description">Total da dispesas</span>
        <span className={`value ${totalSumaryValue != 0 && "expenseValue"}`}>
          {totalSumaryValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </SumaryValueDiv>
  );
};
