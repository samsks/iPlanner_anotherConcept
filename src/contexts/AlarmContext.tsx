import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSound from "use-sound";
import apiPlanner from "../services/apiPlanner";

import audio from "./../assets/audio/audio.mp3";

interface iAlarmContext {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  addAlarm: (data: iDataAlarm) => Promise<void>;
  daysWeek: string[];
  showModalEdit: boolean;
  setShowModalEdit: Dispatch<SetStateAction<boolean>>;
  editAlarm: (data: iDataAlarm) => Promise<void>;
  changeIcon: boolean;
  changeDeleteMode: () => void;
  alarmList: iDataAlarm[];
  deleteMode: boolean;
  setIdAlarm: Dispatch<SetStateAction<string>>;
  deleteAlarm: (id: string) => Promise<void>;
  editAlarmStatus: (data: iDataAlarm) => Promise<void>;
  time: string;
}

interface iDataAlarm {
  id: string;
  userId: string | number | null;
  title: string;
  time: string;
  minute?: string;
  status: boolean;
}

interface iAlarmProps {
  children: React.ReactNode;
}

export const AlarmContext = createContext({} as iAlarmContext);

export const AlarmProvider = ({ children }: iAlarmProps) => {
  const [alarmList, setAlarmList] = useState<iDataAlarm[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [idAlarm, setIdAlarm] = useState("");
  const [deleteMode, setDeleteMode] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const daysWeek = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
  const [time, setTime] = useState("");
  const [play] = useSound(audio);
  const userId = localStorage.getItem("@PROJECTIPLANNER:USERID");
  const AlarmDataApi = async () => {
    try {
      const response = await apiPlanner.get(`users/${userId}/?_embed=alarms`);
      setAlarmList(response.data.alarms);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    AlarmDataApi();
  }, []);

  const changeDeleteMode = () => {
    setDeleteMode(!deleteMode);
    setChangeIcon(!changeIcon);
  };

  useEffect(() => {
    const renderAlarmList = async () => {
      const token = localStorage.getItem("@PROJECTIPLANNER:TOKEN");
      const userId = localStorage.getItem("@PROJECTIPLANNER:USERID");
      if (token && userId) {
        try {
          const response = await apiPlanner.get(`users/${userId}?_embed=alarms`);
          setAlarmList(response.data.alarms);
        } catch (error) {
          console.error(error);
        }
      }
    };
    renderAlarmList();
  }, []);

  const addAlarm = async (data: iDataAlarm) => {
    const userId = localStorage.getItem("@PROJECTIPLANNER:USERID");
    data.status = false;
    data.userId = Number(userId);

    try {
      const response = await apiPlanner.post("alarms", data);
      setAlarmList([...alarmList, response.data]);
      setShowModal(!showModal);
    } catch (error) {
      console.error(error);
    }
  };

  const editAlarm = async (data: iDataAlarm) => {
    try {
      const response = await apiPlanner.patch(`alarms/${idAlarm}`, data);
      const newList = alarmList.filter((element: iDataAlarm) => element.id !== response.data.id);
      setAlarmList([...newList, response.data]);
      setShowModalEdit(!showModalEdit);
    } catch (error) {
      console.error(error);
    }
  };

  const editAlarmStatus = async (data: iDataAlarm) => {
    try {
      const response = await apiPlanner.patch(`alarms/${data.id}`, {
        status: data.status,
      });
      const newList = alarmList.filter((element: iDataAlarm) => element.id !== response.data.id);
      setAlarmList([response.data, ...newList]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAlarm = async (id: string) => {
    try {
      await apiPlanner.delete(`alarms/${id}`);
      const newArray = alarmList.filter((element: iDataAlarm) => element.id !== id);
      setAlarmList(newArray);
    } catch (error) {
      console.error(error);
    }
  };

  const getTime = () => {
    const date: Date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    setTime(`${hour}:${minute}`);
  };

  setInterval(getTime, 1000);

  useEffect(() => {
    const requestAlarmList = async () => {
      const userId = localStorage.getItem("@PROJECTIPLANNER:USERID");
      try {
        const { data } = await apiPlanner.get(`users/${userId}?_embed=alarms`);
        setAlarmList(data.alarms);
      } catch (error) {
        console.error(error);
      }
    };
    requestAlarmList();
  }, []);

  useEffect(() => {
    const alarmNotify = () => {
      alarmList.forEach((alarmItem: iDataAlarm) => {
        if (alarmItem.status && time === alarmItem.time) {
          play();
          toast(alarmItem.title, {
            icon: "🚨",
            style: {
              borderRadius: "10px",
              background: "var(--color-secondary)",
              color: "#fff",
            },
          });
        }
      });
    };
    alarmNotify();
  }, [time]);

  return (
    <AlarmContext.Provider
      value={{
        showModal,
        setShowModal,
        addAlarm,
        daysWeek,
        showModalEdit,
        setShowModalEdit,
        editAlarm,
        changeIcon,
        changeDeleteMode,
        alarmList,
        deleteMode,
        setIdAlarm,
        deleteAlarm,
        editAlarmStatus,
        time,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
};
