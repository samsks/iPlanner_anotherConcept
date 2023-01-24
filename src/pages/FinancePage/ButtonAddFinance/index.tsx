import { ButtonAddFinanceButton } from "./style";
import { HiOutlinePlus } from "react-icons/hi";
import { Dispatch, SetStateAction, useContext } from "react";

interface iButtonAddFinance {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const ButtonAddFinance = ({
  showModal,
  setShowModal,
}: iButtonAddFinance) => {
  return (
    <ButtonAddFinanceButton onClick={() => setShowModal(!showModal)}>
      <HiOutlinePlus />
    </ButtonAddFinanceButton>
  );
};
