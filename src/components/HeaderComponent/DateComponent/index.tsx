import { useState } from "react";
import { StyledClock, StyledDate, StyledDateAndClock } from "./style";

const DateComponent = () => {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const getTime = () => {
    const date: Date = new Date();
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let weeks = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    let week = date.getDay();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let now = `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`;
    let today = `${day < 10 ? "0" + day : day} de ${months[month]}, ${weeks[week - 1]}`;
    setHour(now);
    setDate(today);
  };
  setInterval(getTime, 1000);

  return (
    <StyledDateAndClock>
      <StyledClock>{hour}</StyledClock>
      <StyledDate>{date}</StyledDate>
    </StyledDateAndClock>
  );
};

export default DateComponent;
