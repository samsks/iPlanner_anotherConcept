import React, { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import Header from "../HeaderComponent";
import { StyledButton } from "../../styles/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { StyledAside, StyledPageContainer, StyledContentContainer, StyledOutletContainer } from "./style";
import { motion } from "framer-motion";
import iconLogoWhite from "../../assets/icons/iconLogoWhite.svg";
import { AuthContext } from "../../contexts/AuthContext";
import { TasksContext } from "../../contexts/TasksContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const { isVisibleAside, setIsvisibleAside } = useContext(TasksContext);

  const currentPage = (e: React.MouseEvent<HTMLElement>) => {
    const currents = document.getElementsByClassName("current");

    for (let i = 0; i < currents.length; i++) {
      const element = currents[i];
      element.classList.remove("current");
    }
    e.currentTarget.classList.add("current");
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
      <StyledPageContainer>
        <StyledContentContainer>
          <StyledAside className={`asideMobileVersion ${isVisibleAside ? "asideVisible" : ""}`}>
            <Link
              to={"/dashboard/home"}
              onClick={(e) => {
                currentPage(e);
              }}
            >
              <img src={iconLogoWhite} alt="Logo iPlanner" />
            </Link>
            <button className={`asideButtonMenu ${!isVisibleAside && "isNotVisibleMenu"}`} onClick={() => setIsvisibleAside(false)}>
              {" "}
              <GiHamburgerMenu />
            </button>
            <nav>
              <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <motion.li
                  whileHover={{ width: 205 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    currentPage(e);
                  }}
                  className="current"
                >
                  <Link to={"/dashboard/home"}>Inicio</Link>
                </motion.li>
                <motion.li
                  whileHover={{ width: 205 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    currentPage(e);
                  }}
                >
                  <Link to={"/dashboard/task"}>Tarefas</Link>
                </motion.li>
                <motion.li
                  whileHover={{ width: 205 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    currentPage(e);
                  }}
                >
                  <Link to={"/dashboard/alarm"}>Alarmes</Link>
                </motion.li>
                <motion.li
                  whileHover={{ width: 205 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    currentPage(e);
                  }}
                >
                  <Link to={"/dashboard/finance"}>Contas</Link>
                </motion.li>
              </motion.ul>
            </nav>
            <StyledButton buttonType={"inactive"} buttonSize={"small"} onClick={logout}>
              Sair {<FiLogOut />}
            </StyledButton>
          </StyledAside>
          <div>
            <Header />
            <StyledOutletContainer>
              <Outlet />
            </StyledOutletContainer>
          </div>
        </StyledContentContainer>
      </StyledPageContainer>
    </motion.div>
  );
};

export default Dashboard;
