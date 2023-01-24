import apiPlanner from "../../../../services/apiPlanner";

import { useContext } from "react";
import { FinancesContext } from "../../../../contexts/FinancesContext";

import { FakeChechBoxButton } from "./style";
import { BsCheckLg } from "react-icons/bs";

interface iFakeCheckBoxProps {
  itemId: number;
  isAccomplished: boolean;
}

export const FakeCheckBox = ({
  itemId,
  isAccomplished,
}: iFakeCheckBoxProps) => {
  const { reloadControler, setReloadControler } = useContext(FinancesContext);

  return (
    <FakeChechBoxButton
      onClick={() => {
        const requestChange = async () => {
          try {
            await apiPlanner.patch(`/finance/${itemId}`, {
              userId: Number(localStorage.getItem("@PROJECTIPLANNER:USERID")),
              isAccomplished: !isAccomplished,
            });

            reloadControler === true
              ? setReloadControler(false)
              : setReloadControler(true);
          } catch (error) {
            console.error(error);
          }
        };

        requestChange();
      }}
    >
      {isAccomplished === true && <BsCheckLg />}
    </FakeChechBoxButton>
  );
};
