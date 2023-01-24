import React from "react";
import { StyledTaskCards } from "./style";

interface iTaskCardsProps {
  children: React.ReactNode;
  onClick: (event: any) => void;
}

const TaskCards = ({ children, onClick }: iTaskCardsProps) => {
  return <StyledTaskCards onClick={onClick}>{children}</StyledTaskCards>;
};

export default TaskCards;
