import apiPlanner from "../../../../services/apiPlanner";
import { ChechBoxButton } from "./style";

interface iCheckBoxProps {
  financeId: number;
  isAccomplished: boolean;
}
export const CheckBox = (props: iCheckBoxProps) => {
  const userId = localStorage.getItem("@PROJECTIPLANNER:USERID");
  const updateFinanceStatus = async () => {
    try {
      await apiPlanner.patch(`finance/${props.financeId}`, {
        userId: userId,
        isAccomplished: !props.isAccomplished,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChechBoxButton
      type={"checkbox"}
      onClick={() => {
        updateFinanceStatus();
      }}
    />
  );
};
