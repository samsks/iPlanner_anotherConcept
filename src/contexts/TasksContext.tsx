import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { iNewTaskData } from "../pages/TaskPage/components/NewTask";
import apiPlanner from "../services/apiPlanner";
interface iTasksContext {
  newTask: (data: iNewTaskData) => void;
  tasks: iTasksData[];
  filtered: iTasksData[];
  lists: string[];
  isFiltered: boolean;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  setFiltered: React.Dispatch<React.SetStateAction<iTasksData[]>>;
  setTasks: React.Dispatch<React.SetStateAction<iTasksData[]>>;
  setLists: React.Dispatch<React.SetStateAction<string[]>>;
  editingTask: (id: string, data: iEditTaskData) => void;
  deleteTask: (id: string) => void;
  favoriteTask: (id: string, data: iEditTaskData) => void;
  completeTask: (id: string, data: iEditTaskData) => void;
  actualFilter: string;
  setActualFilter: React.Dispatch<React.SetStateAction<string>>;
  isVisibleAside: boolean;
  setIsvisibleAside: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iTasksProps {
  children: React.ReactNode;
}
export interface iTasksData {
  title: string;
  content: string;
  priority?: boolean;
  favorite?: boolean;
  isFinished: boolean;
  id: string;
  userId: string;
  list?: string;
}

interface iEditTaskData {
  title?: string;
  content?: string;
  favorite?: boolean;
  isFinished?: boolean;
}

export interface iListData {
  list: string;
}

export const TasksContext = createContext({} as iTasksContext);
export const TasksProvider = ({ children }: iTasksProps) => {
  const [tasks, setTasks] = useState<iTasksData[]>([]);
  const [filtered, setFiltered] = useState<iTasksData[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [lists, setLists] = useState<string[]>([]);
  const [actualFilter, setActualFilter] = useState("");
  const [isVisibleAside, setIsvisibleAside] = useState(false);

  useEffect(() => {
    const userTasks = async () => {
      const userId = localStorage.getItem("@PROJECTIPLANNER:USERID");

      try {
        const { data } = await apiPlanner.get(`users/${userId}?_embed=tasks`);

        setTasks(data.tasks);
        const reduced = data.tasks
          .reduce((acc: any, task: iTasksData) => {
            if (task.list) {
              return acc + "," + task.list;
            } else {
              return acc;
            }
          }, "")
          .split(",")
          .reduce((acc: string, list: string) => (acc.includes(list) ? acc : acc + list + ","))
          .split(",");

        console.log(reduced);
        setLists(reduced);
      } catch (error) {
        console.error(error);
      }
    };
    userTasks();
  }, []);
  const editingTask = async (id: string, data: iEditTaskData) => {
    try {
      await apiPlanner.patch(`/tasks/${id}`, data);
      const filteredTasks = tasks.filter((task) => {
        return task.id !== id;
      });
      const editedTask = tasks.filter((task) => {
        return task.id === id;
      });

      if (data.title) {
        editedTask[0].title = data.title;
      }
      if (data.content) {
        editedTask[0].content = data.content;
      }
      setTasks([...filteredTasks, ...editedTask]);
    } catch (error) {
      console.error(error);
    }
  };

  const newTask = async (data: iNewTaskData) => {
    if (isFiltered && actualFilter.length > 0 && actualFilter !== "Concluídas" && actualFilter !== "Favoritas") {
      data.list = actualFilter;
    }
    try {
      const resp = await apiPlanner.post("/tasks", data);
      setTasks([...tasks, resp.data]);
      toast.success("Tarefa criada");
    } catch (error) {
      console.error(error);
    }
  };
  const favoriteTask = async (id: string, data: iEditTaskData) => {
    try {
      await apiPlanner.patch(`/tasks/${id}`, data);
      const filteredTasks = tasks.filter((task) => {
        return task.id !== id;
      });
      const editedTask = tasks.filter((task) => {
        return task.id === id;
      });
      editedTask[0].favorite = data.favorite;
      setTasks([...filteredTasks, ...editedTask]);
    } catch (error) {
      console.error(error);
    }
  };

  const completeTask = async (id: string, data: iEditTaskData) => {
    try {
      await apiPlanner.patch(`/tasks/${id}`, data);
      const filteredTasks = tasks.filter((task) => {
        return task.id !== id;
      });
      const editedTask = tasks.filter((task) => {
        return task.id === id;
      });
      editedTask[0].favorite = data.isFinished;
      setTasks([...filteredTasks, ...editedTask]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await apiPlanner.delete(`/tasks/${id}`);
      setTasks(
        tasks.filter((task) => {
          return task.id !== id;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TasksContext.Provider
      value={{
        newTask,
        tasks,
        setTasks,
        editingTask,
        deleteTask,
        favoriteTask,
        completeTask,
        filtered,
        isFiltered,
        setFiltered,
        setIsFiltered,
        lists,
        setLists,
        actualFilter,
        setActualFilter,
        isVisibleAside,
        setIsvisibleAside,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
