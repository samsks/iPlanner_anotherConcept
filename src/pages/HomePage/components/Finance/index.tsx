import { useContext } from "react";
import { FinancesContext } from "../../../../contexts/FinancesContext";
import apiPlanner from "../../../../services/apiPlanner";
import { CheckBox } from "../CheckBox";
import { StyledContainerUl } from "./style";
import { BiTrashAlt } from "react-icons/bi";
export const Finances = () => {
  const { allFinanceItens, setAllFinanceItens } = useContext(FinancesContext);

  const deleteFinaceHome = async (id: any) => {
    try {
      await apiPlanner.delete(`finance/${id}`);
      setAllFinanceItens(
        allFinanceItens.filter((finance) => {
          return finance.id !== id;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledContainerUl id="ul">
      {allFinanceItens.map((finance) => {
        return (
          <li className={`financeCard ${finance.fitemType}`} key={finance.id}>
            <h2 className="subTitle">{finance.FitemTitle}</h2>
            <div>
              <div className="subMenu">
                <CheckBox financeId={finance.id} isAccomplished={finance.isAccomplished} />
                <button className="buttonDeletefinance" type="button" onClick={() => deleteFinaceHome(finance.id)}>
                  <BiTrashAlt className="trashIcon" />
                </button>
              </div>
              <span>
                {finance.fitemValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </li>
        );
      })}
    </StyledContainerUl>
  );
};
