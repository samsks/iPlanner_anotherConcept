import { useContext, useEffect, useState } from "react";
import { IoMdAlarm } from "react-icons/io";
import { GrTrash } from "react-icons/gr";
import StyledAlarmCard from "./style";
import { AlarmContext } from "../../../contexts/AlarmContext";

interface iAlarmCardProps {
  element: {
    id: string;
    userId: string | number | null;
    title: string;
    status: boolean;
    time: string;
  };
}

const AlarmCard = ({ element }: iAlarmCardProps) => {
  const { deleteMode, setIdAlarm, showModalEdit, setShowModalEdit, deleteAlarm, editAlarmStatus, time } = useContext(AlarmContext);
  const [statusAlarm, setStatusAlarm] = useState(!element.status);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);

  const changeAlarmStatus = () => {
    setStatusAlarm(!statusAlarm);
    element.status = statusAlarm;
    editAlarmStatus(element);
  };

  const showModalAndCaptureId = () => {
    setIdAlarm(element.id);
    setShowModalEdit(!showModalEdit);
  };

  useEffect(() => {
    const elemTime = element.time.split(":").map((elem) => Number(elem));
    const currentTime = time.split(":").map((elem) => Number(elem));
    elemTime[0] === 0 ? (elemTime[0] = 24) : "";
    setRemainingHours(currentTime[0] > elemTime[0] ? 24 - elemTime[0] : elemTime[0] - currentTime[0]);
    setRemainingMinutes(currentTime[1] > elemTime[1] ? currentTime[1] - elemTime[1] : elemTime[1] - currentTime[1]);
  }, [time]);

  return (
    <StyledAlarmCard className={element.id}>
      {deleteMode == true ? (
        <button onClick={() => deleteAlarm(element.id)} className="btnDelete toggle-btn">
          <GrTrash />
        </button>
      ) : (
        <div className="toggle-btn">
          <label>
            <input type="checkbox" checked={element.status} onChange={() => changeAlarmStatus()} className="toogle-input" />
            <div className="slider">
              <button className="btnAlarm"></button>
            </div>
          </label>
        </div>
      )}
      <div className="divAux" onClick={() => showModalAndCaptureId()}>
        <div className="alarmTime">
          <h3>{element.time}</h3>
        </div>
        <div className="countdown">
          <span>
            <IoMdAlarm />
          </span>
          <p className="spanCountdown">
            em {remainingHours} horas e {remainingMinutes} minutos
          </p>
        </div>
        <h4 className="description">{element.title}</h4>
      </div>
    </StyledAlarmCard>
  );
};

export default AlarmCard;
