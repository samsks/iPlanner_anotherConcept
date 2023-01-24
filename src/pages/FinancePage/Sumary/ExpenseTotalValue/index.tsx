import { useContext } from "react";
import { FinancesContext } from "../../../../contexts/FinancesContext";
import { SumaryValueDiv } from "../SumaryvalueDiv";

export const TotalValue = () => {
  const { filteredFinanceItens } = useContext(FinancesContext);
  const totalValue = filteredFinanceItens.reduce(
    (acomulator, financeItem) => (financeItem.fitemType === "despesa" ? acomulator - financeItem.fitemValue : acomulator + financeItem.fitemValue),
    0
  );

  return (
    <SumaryValueDiv className="sumaryValueDiv">
      <div>
        <span className="description">Saldo previsto</span>
        <span className={`value ${totalValue < 0 && "expenseValue"}`}>
          {totalValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </SumaryValueDiv>
  );
};
