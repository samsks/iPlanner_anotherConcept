import axios from "axios";
import { useContext, useEffect, useState } from "react";
import apiPlanner from "../../../../services/apiPlanner";
import { StyledDiv } from "./style";
import { AiFillStar } from "react-icons/ai";
import { TasksContext } from "../../../../contexts/TasksContext";
import TaskList from "../../../TaskPage/components/TaskList";
interface iTasksData {
  title: string;
  content: string;
  priority?: boolean;
  favorite?: boolean;
  isFinished: boolean;
  id: string;
  userId: string;
}
export const Tasks = () => {
  useContext(TasksContext);

  return (
    <StyledDiv id="StyledDiv">
      <TaskList />
    </StyledDiv>
  );
};
