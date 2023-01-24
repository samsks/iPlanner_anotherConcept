import { monthOptions, yearOptions } from "../../../data/optionsData";
import SelectComponent from "../../../components/SelectComponent";
import { TimeSelectDiv } from "./style";

export const TimeSelect = () => {
  const time = new Date();

  return (
    <TimeSelectDiv className="divYearMonth">
      <SelectComponent optionList={yearOptions} label="ano:" defaultValue={time.getFullYear().toString()} />
      <SelectComponent optionList={monthOptions} label="mês:" defaultValue={(time.getMonth() + 1).toString()} />
    </TimeSelectDiv>
  );
};
