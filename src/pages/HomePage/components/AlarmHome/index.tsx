import { useContext } from "react";
import { Link } from "react-router-dom";
import { AlarmContext } from "../../../../contexts/AlarmContext";
import AlarmCard from "../../../AlarmPage/AlarmCard";
import { StyledUl } from "./style";

export const AlarmHome = () => {
  const { alarmList } = useContext(AlarmContext);
  const alarm = alarmList[0];
  console.log(alarm);
  return (
    <StyledUl>
      {alarmList ? (
        alarmList.map((alarm) => {
          return <AlarmCard element={alarm} key={alarm.id} />;
        })
      ) : (
        <Link to={"/dashboard/alarm"}> Adicione um alarme</Link>
      )}
    </StyledUl>
  );
};
