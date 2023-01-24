import { useContext } from "react";
import { StyledPageContainer, StyledFinanceSection, StyledTaskSection, StyledDoNotForgetSection, StyledAlarmSection, StyledLinkHome } from "./style";
import { Finances } from "./components/Finance";
import { Tasks } from "./components/Tasks";
import { Summary } from "./components/Summary";
import { AlarmHome } from "./components/AlarmHome";
import { FinancesContext } from "../../contexts/FinancesContext";
import { AlarmContext } from "../../contexts/AlarmContext";
import { TasksContext } from "../../contexts/TasksContext";
import addtasksrafiki from "../../assets/icons/addtasksrafiki.svg";
import auditrafiki from "../../assets/icons/auditrafiki.svg";
import wristwatchrafiki from "../../assets/icons/wristwatchrafiki.svg";
import eWalletbro from "../../assets/icons/eWalletbro.svg";

const HomePage = () => {
  const { allFinanceItens } = useContext(FinancesContext);
  const { alarmList } = useContext(AlarmContext);
  const { tasks } = useContext(TasksContext);
  return (
    <StyledPageContainer>
      <h1>Meu Dia</h1>
      <div className="divFinanceTask">
        <StyledFinanceSection>
          <h2>Finanças</h2>
          <div className="container">
            {allFinanceItens.length !== 0 ? (
              <Finances />
            ) : (
              <StyledLinkHome to={"/dashboard/finance"}>
                <img src={auditrafiki} alt="Adicione uma finança" />
              </StyledLinkHome>
            )}
          </div>
        </StyledFinanceSection>
        <StyledTaskSection>
          <h2>Tarefas</h2>
          <div className="container">
            {tasks.length !== 0 ? (
              <Tasks />
            ) : (
              <StyledLinkHome to={"/dashboard/task"}>
                <img src={addtasksrafiki} alt="Adicione uma tarefa" />
              </StyledLinkHome>
            )}
          </div>
        </StyledTaskSection>
      </div>
      <div className="divForgetAlarm">
        <StyledDoNotForgetSection>
          <h2>Resumo Finanças:</h2>
          {allFinanceItens.length !== 0 ? <Summary /> : <img src={eWalletbro} alt="carteira vazia" />}
        </StyledDoNotForgetSection>
        <StyledAlarmSection>
          <h2>Alarmes:</h2>
          {alarmList.length !== 0 ? (
            <AlarmHome />
          ) : (
            <StyledLinkHome to={"/dashboard/alarm"}>
              {" "}
              <img className="imgAlarm" src={wristwatchrafiki} alt="Adicione um despertador " />
            </StyledLinkHome>
          )}
        </StyledAlarmSection>
      </div>
    </StyledPageContainer>
  );
};

export default HomePage;
