import Resume from "./components/Resume";
import { StyledTasks } from "./style";
import TaskList from "./components/TaskList";

const Tasks = () => {
  return (
    <StyledTasks>
      <Resume />
      <TaskList />
    </StyledTasks>
  );
};

export default Tasks;
