import AlarmCard from "./AlarmCard";
import { StyledPageContainer } from "./style";
import { GrAdd, GrEdit, GrTrash } from "react-icons/gr";
import Modal from "../../components/Modal";
import { StyledAddAlarm } from "./AlarmCard/styleAddAlarm";
import { useContext, useState } from "react";
import InputComponent from "../../components/InputComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formAlarmSchema } from "../../validation";
import { AlarmContext } from "../../contexts/AlarmContext";

const AlarmPage = () => {
  const { showModal, setShowModal, addAlarm, showModalEdit, setShowModalEdit, editAlarm, changeIcon, changeDeleteMode, alarmList } =
    useContext(AlarmContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(formAlarmSchema),
  });

  return (
    <StyledPageContainer>
      {showModal && (
        <Modal handleModal={() => setShowModal(!showModal)} title="Adicionar novo alarme">
          <StyledAddAlarm onSubmit={handleSubmit(addAlarm)}>
            <div className="divHour">
              <input className="timeInput" {...register("time")} type="time" />
            </div>
            <InputComponent
              helperText={errors.title?.message}
              type="text"
              placeholder="Digite a descrição do alarme"
              register={() => register("title")}
            />
            <div className="divSaveOrCancel">
              <button type="submit">Salvar</button>
              <button onClick={() => setShowModal(!showModal)} type="button">
                Cancelar
              </button>
            </div>
          </StyledAddAlarm>
        </Modal>
      )}
      {showModalEdit && (
        <Modal handleModal={() => setShowModalEdit(!showModalEdit)} title="Editar seu alarme">
          <StyledAddAlarm onSubmit={handleSubmit(editAlarm)}>
            <div className="divHour">
              <input className="timeInput" {...register("time")} type="time" />
            </div>
            <InputComponent type="text" placeholder="Digite a descrição do alarme" register={() => register("title")} />
            <div className="divSaveOrCancel">
              <button type="submit">Salvar</button>
              <button onClick={() => setShowModalEdit(!showModalEdit)} type="button">
                Cancelar
              </button>
            </div>
          </StyledAddAlarm>
        </Modal>
      )}
      <div className="divButtons">
        <button onClick={() => setShowModal(!showModal)}>
          <GrAdd />
        </button>
        {changeIcon == true ? (
          <button>
            <GrTrash onClick={changeDeleteMode} />
          </button>
        ) : (
          <button>
            <GrEdit onClick={changeDeleteMode} />
          </button>
        )}
      </div>
      <ul id="ulAlarm">
        {alarmList &&
          alarmList.map((element: any) => {
            return <AlarmCard key={element.id} element={element} />;
          })}
      </ul>
    </StyledPageContainer>
  );
};

export default AlarmPage;
