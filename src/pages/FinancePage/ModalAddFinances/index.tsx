import { ModalAddFinancesContainer, ModalAddFinanceContent } from "./style";
import InputComponent from "../../../components/InputComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formAddFinanceSchema } from "../../../validation";
import apiPlanner from "../../../services/apiPlanner";
import { Dispatch, SetStateAction, useContext } from "react";
import { FinancesContext } from "../../../contexts/FinancesContext";
import { v4 as uuidv4 } from "uuid";
import Modal from "../../../components/Modal";
import { StyledButton } from "../../../styles/button";

interface iDataRegisterFinance {
  id: string;
  userId: string | number | null;
  FitemTitle: string;
  fitemValue: number;
  fitemType: "despesa" | "recebimento";
  transactionDate: string;
}

interface iModalAddFinances {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalAddFinances = ({ showModal, setShowModal }: iModalAddFinances) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataRegisterFinance>({
    resolver: yupResolver(formAddFinanceSchema),
  });

  const { allFinanceItens, setAllFinanceItens } = useContext(FinancesContext);
  const onSubmitFunction = async (dataForm: iDataRegisterFinance) => {
    dataForm.transactionDate = dataForm.transactionDate.split("-").reverse().join("/");
    dataForm.userId = Number(localStorage.getItem("@PROJECTIPLANNER:USERID"));
    dataForm.id = uuidv4();
    dataForm.fitemValue = Number(dataForm.fitemValue);
    try {
      const { data } = await apiPlanner.post("finance", dataForm);
      setAllFinanceItens([...allFinanceItens, data]);
      setShowModal(!showModal);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalAddFinancesContainer>
      <Modal handleModal={() => setShowModal(!showModal)} title="Adicionar valor">
        <ModalAddFinanceContent>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <InputComponent
              placeholder="ex: abacaxi"
              register={() => register("FitemTitle")}
              helperText={errors.FitemTitle?.message}
              type="text"
              label="Descrição:"
            />
            <div className="selectValueType">
              <InputComponent
                placeholder="R$ 50,00"
                register={() => register("fitemValue")}
                helperText={errors.fitemValue?.message}
                type="number"
                label="Valor:"
              />
              <label>
                Tipo:
                <select id="selectType" {...register("fitemType")}>
                  <option value="recebimento">Recebimento</option>
                  <option value="despesa">Despesa</option>
                </select>
              </label>
            </div>
            <InputComponent
              placeholder="dd/mm/aaaa"
              register={() => register("transactionDate")}
              helperText={errors.transactionDate?.message}
              type="date"
              label="Vencimento:"
            />
            <div className="buttonsDiv">
              <StyledButton buttonSize="small" type="submit">
                Salvar
              </StyledButton>
              <StyledButton buttonSize="small" onClick={() => setShowModal(false)}>
                Voltar
              </StyledButton>
            </div>
          </form>
        </ModalAddFinanceContent>
      </Modal>
    </ModalAddFinancesContainer>
  );
};
