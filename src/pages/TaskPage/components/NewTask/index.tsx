import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TasksContext } from "../../../../contexts/TasksContext";

export interface iNewTaskData {
  title?: string;
  content?: string;
  favorite?: boolean;
  isFinished?: boolean;
  id?: string;
  list?: string;
  userId?: number | null;
}

const NewTask = () => {
  const { newTask } = useContext(TasksContext);
  const newTaskSchema = yup.object().shape({
    title: yup.string().required("Você precisa definir um titulo"),
    content: yup.string(),
    favorite: yup.string(),
  });

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
    newTask(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitFunction)}>
      <label htmlFor="">Titulo</label>
      <input type="text" {...register("title")} />
      <label htmlFor="">Descrição</label>
      <input type="text" {...register("content")} />
      <button type="submit">Criar</button>
    </form>
  );
};

export default NewTask;
