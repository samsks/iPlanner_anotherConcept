import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iTasksData, TasksContext } from "../../../../contexts/TasksContext";
import { StyledEditTask } from "./style";
import { StyledButton } from "../../../../styles/button";
import DeleteTask from "../DeleteTask";
import DeleteModal from "../DeleteTask/DeleteModal";
import InputComponent from "../../../../components/InputComponent";
import { editTaskSchema } from "../../../../validation";

export interface iEditTaskData {
  title?: string;
  content?: string;
  favorite?: boolean;
  isFinished?: boolean;
  id: string;
}

interface iEditProps {
  editTask: iTasksData[];
  handleModal: () => void;
  setEditTask: React.Dispatch<React.SetStateAction<iTasksData[]>>;
}

interface iNewData {
  title?: string;
  content?: string;
}

const EditTask = ({ editTask, setEditTask, handleModal }: iEditProps) => {
  const { editingTask } = useContext(TasksContext);
  const [deleteModal, setDeleteModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditTaskData>({
    resolver: yupResolver(editTaskSchema),
  });

  const handleSubmitFunction = (data: iEditTaskData) => {
    let newData: iNewData = {};
    if (data.title?.toLocaleLowerCase() !== editTask[0].title.toLocaleLowerCase()) {
      newData.title = data.title;
    }
    if (data.content?.toLocaleLowerCase() !== editTask[0].content.toLocaleLowerCase()) {
      newData.content = data.content;
    }
    if (data.title?.trim() || data.content?.trim()) {
      handleModal();
      editingTask(editTask[0].id, newData);
    }
  };

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  return (
    <>
      {deleteModal && (
        <DeleteModal handleDeleteModal={handleDeleteModal}>
          <DeleteTask id={editTask[0].id} setModal={setDeleteModal} handleModal={handleModal} />
        </DeleteModal>
      )}
      <StyledEditTask onSubmit={handleSubmit(handleSubmitFunction)}>
        <InputComponent label="Titulo" type="text" placeholder="Titulo" register={() => register("title")} helperText={errors.title?.message} />
        <InputComponent
          label="Descrição"
          type="text"
          placeholder="Descrição"
          register={() => register("content")}
          helperText={errors.content?.message}
        />
        <div className="div-button">
          <StyledButton buttonSize="small" type="submit">
            Salvar
          </StyledButton>
          <StyledButton buttonSize="small" type="button" onClick={() => setDeleteModal(true)}>
            Excluir
          </StyledButton>
        </div>
      </StyledEditTask>
    </>
  );
};

export default EditTask;
