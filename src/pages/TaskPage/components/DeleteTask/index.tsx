import React, { useContext } from "react";
import { TasksContext } from "../../../../contexts/TasksContext";
import { StyledButton } from "../../../../styles/button";
interface iDeleteTaskProps {
  id: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleModal: () => void;
}

const DeleteTask = ({ id, setModal, handleModal }: iDeleteTaskProps) => {
  const { deleteTask } = useContext(TasksContext);
  return (
    <form
      onSubmit={(e) => {
        deleteTask(id);
        setModal(false);
        handleModal();
        e.preventDefault();
      }}
    >
      <p>Deseja mesmo deletar essa tarefa?</p>
      <div>
        <StyledButton type="submit">Sim</StyledButton>
        <StyledButton type="button" onClick={() => setModal(false)}>
          Não
        </StyledButton>
      </div>
    </form>
  );
};

export default DeleteTask;
