import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from "uuid";
import { iTasksData, TasksContext } from "../../../../contexts/TasksContext";
import { iNewTaskData } from "../NewTask";
import { StyledTaskList } from "./style";
import { Text } from "../../../../styles/typography";
import Modal from "../../../../components/Modal";
import TaskCards from "../TaskCards";
import EditTask from "../EditTask";
import { newTaskSchema } from "../../../../validation";
import { AiFillStar } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

const TaskList = () => {
  const [isModal, setIsModal] = useState(false);
  const [modal, setModal] = useState("");
  const { tasks, newTask, favoriteTask, filtered, isFiltered } = useContext(TasksContext);
  const [editTask, setEditTask] = useState<iTasksData[]>([]);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<iNewTaskData>({
    resolver: yupResolver(newTaskSchema),
  });

  const handleSubmitFunction = (data: iNewTaskData) => {
    resetField("title");
    const userId = window.localStorage.getItem("@PROJECTIPLANNER:USERID");
    newTask({
      ...data,
      content: "",
      favorite: false,
      isFinished: false,
      id: uuidv4(),
      userId: Number(userId),
    });
  };

  return (
    <StyledTaskList>
      {isModal && (
        <Modal title={modal == "edit" ? "Editar Tarefa" : "Deletar Tarefa"} handleModal={handleModal}>
          {modal == "edit" ? <EditTask editTask={editTask} setEditTask={setEditTask} handleModal={handleModal} /> : <h1>oi</h1>}
        </Modal>
      )}
      <ul>
        {(isFiltered ? filtered : tasks).map((task) => {
          return (
            <TaskCards
              key={task.id}
              onClick={(e) => {
                if (e.target.tagName == "LI") {
                  setModal("edit");
                  handleModal();
                  setEditTask([task]);
                }
              }}
            >
              {task.isFinished ? (
                <input
                  type="checkbox"
                  defaultChecked
                  onChange={() => {
                    favoriteTask(task.id, { isFinished: !task.isFinished });
                  }}
                />
              ) : (
                <input
                  type="checkbox"
                  onChange={() => {
                    favoriteTask(task.id, { isFinished: !task.isFinished });
                  }}
                />
              )}
              <Text tag="p">{task.title}</Text>
              <Text tag="p">{task.content}</Text>
              <div className="absolute-container">
                {task.favorite ? (
                  <AiFillStar
                    className="blue"
                    onClick={() => {
                      favoriteTask(task.id, { favorite: !task.favorite });
                    }}
                  />
                ) : (
                  <AiFillStar
                    className="grey"
                    onClick={() => {
                      favoriteTask(task.id, { favorite: !task.favorite });
                    }}
                  />
                )}
              </div>
            </TaskCards>
          );
        })}
      </ul>
      <form className="new-task" onSubmit={handleSubmit(handleSubmitFunction)}>
        <button type="submit">
          <GrAdd />
        </button>
        <input type="text" {...register("title")} placeholder="Adicionar Tarefa" />
      </form>
    </StyledTaskList>
  );
};

export default TaskList;
