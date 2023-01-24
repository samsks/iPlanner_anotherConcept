import { TasksProvider } from "./TasksContext";
import { AlarmProvider } from "./AlarmContext";
import { FinancesProvider } from "./FinancesContext";
import { Outlet } from "react-router-dom";

const Providers = () => {
  return (
    <>
      <AlarmProvider>
        <FinancesProvider>
          <TasksProvider>
            <Outlet />
          </TasksProvider>
        </FinancesProvider>
      </AlarmProvider>
    </>
  );
};

export default Providers;
