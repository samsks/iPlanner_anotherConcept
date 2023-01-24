import { useContext } from "react";
import { FinancesContext } from "../../../../contexts/FinancesContext";
import { SumaryValueDiv } from "../SumaryvalueDiv";

export const RealTotalValue = () => {
  const { filteredFinanceItens } = useContext(FinancesContext);
  const totalValue = filteredFinanceItens.reduce(
    (acomulator, financeItem) =>
      financeItem.isAccomplished === true && financeItem.fitemType !== "despesa"
        ? acomulator + financeItem.fitemValue
        : financeItem.isAccomplished === true
        ? acomulator - financeItem.fitemValue
        : acomulator,
    0
  );

  return (
    <SumaryValueDiv className="sumaryValueDiv">
      <div>
        <span className="description">Saldo real</span>
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
