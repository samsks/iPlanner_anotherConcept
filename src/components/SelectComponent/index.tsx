import { useContext } from "react";
import { FinancesContext } from "../../contexts/FinancesContext";
import { iOptionsData, yearOptions } from "../../data/optionsData";
import { Text } from "../../styles/typography";
import { StyledSelectDefault } from "./style";

interface iSelectModuleProps {
  label: string;
  optionList: iOptionsData[];
  defaultValue?: string | number | readonly string[] | undefined;
}

const SelectComponent = ({ optionList, label, defaultValue }: iSelectModuleProps) => {
  const { setYear, setMonth } = useContext(FinancesContext);
  return (
    <StyledSelectDefault>
      <Text tag="label">{label}</Text>
      <select
        onChange={(e) => {
          optionList === yearOptions ? setYear(e.target.value) : setMonth(e.target.value);
        }}
        defaultValue={defaultValue && defaultValue}
      >
        {optionList.map(({ value, text }, i: number) => (
          <option key={i} value={value}>
            {text}
          </option>
        ))}
      </select>
    </StyledSelectDefault>
  );
};

export default SelectComponent;
