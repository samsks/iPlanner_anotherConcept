import { iFinanceItem } from "../../../contexts/FinancesContext";
import { ListFinanceDiv } from "./styles";
import { ButtonExclude } from "./ButtonExclude";
import { FakeCheckBox } from "./FakeCheckBox";

interface iPropsListFinanceItens {
  filteredFinanceItens: iFinanceItem[];
  reloadControler: boolean;
  setReloadControler: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ListFinanceItens = (props: iPropsListFinanceItens) => {
  return (
    <ListFinanceDiv>
      {props.filteredFinanceItens ? (
        props.filteredFinanceItens.map((financeItem: iFinanceItem, financeItemIndex: number) => (
          <li className={`financeItemCard ${financeItem.fitemType === "despesa" ? "borderRed" : "borderGreen"}`} key={financeItemIndex}>
            <div className="financeItemCard__texts">
              <h3>{financeItem.FitemTitle}</h3>
              <div className="financeItemCard__texts__typeDate">
                <span className="financeItemCard__texts__typeDate__type">{financeItem.fitemType}</span>
                <span className="financeItemCard__texts__typeDate__date">{financeItem.transactionDate}</span>
              </div>
            </div>
            <div className="priceConfirm">
              <FakeCheckBox itemId={financeItem.id} isAccomplished={financeItem.isAccomplished} />
              <span>
                {financeItem.fitemValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <ButtonExclude financeItemId={financeItem.id} reloadControler={props.reloadControler} setReloadControler={props.setReloadControler} />
          </li>
        ))
      ) : (
        <h3>Você não possui historico de finanças</h3>
      )}
    </ListFinanceDiv>
  );
};
