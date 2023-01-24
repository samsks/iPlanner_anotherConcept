import { useContext, useState } from "react";
import { FinancesContext } from "../../../contexts/FinancesContext";
import { SelectorsDiv } from "./style";
export const Selectors = () => {
  const { setValueType } = useContext(FinancesContext);
  const [buttonSelected, setButtonSelected] = useState("todos");

  return (
    <SelectorsDiv>
      <button
        onClick={() => {
          setValueType("todos");
          setButtonSelected("todos");
        }}
        className={`button-small ${buttonSelected === "todos" && "button-blue"}`}
      >
        todos
      </button>
      <button
        onClick={() => {
          setValueType("despesa");
          setButtonSelected("despesas");
        }}
        className={`button-small ${buttonSelected === "despesas" && "button-blue"}`}
      >
        despesas
      </button>
      <button
        onClick={() => {
          setValueType("recebimento");
          setButtonSelected("recebimentos");
        }}
        className={`button-small ${buttonSelected === "recebimentos" && "button-blue"}`}
      >
        recebimentos
      </button>
    </SelectorsDiv>
  );
};
