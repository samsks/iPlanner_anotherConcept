import { Route, Routes, Navigate } from "react-router-dom";
import { Finances } from "../pages/FinancePage";
import Dashboard from "../components/Dashboard";
import AlarmPage from "../pages/AlarmPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoutes from "../components/ProtectedRoutes";
import RegisterPage from "../pages/RegisterPage";
import Tasks from "../pages/TaskPage";
import Providers from "../contexts";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route element={<ProtectedRoutes />}>
      <Route element={<Providers />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<HomePage />} />
          <Route path="task" element={<Tasks />} />
          <Route path="alarm" element={<AlarmPage />} />
          <Route path="finance" element={<Finances />} />
        </Route>
      </Route>
    </Route>

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesMain;
