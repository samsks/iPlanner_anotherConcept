import React from "react";
import { StyledModalContainer, StyledModalContent } from "./style";
import { AiOutlineClose } from "react-icons/ai";
interface iModalProps {
  children: React.ReactNode;
  handleModal: () => void;
  title?: string;
}
const Modal = ({ children, handleModal, title }: iModalProps) => {
  return (
    <StyledModalContainer
      onClick={() => {
        handleModal;
      }}
    >
      <StyledModalContent>
        <header className="modal-header">
          <h3>{title}</h3>
          <button className="close-modal" onClick={handleModal}>
            <AiOutlineClose />
          </button>
        </header>
        <div className="modal-children">{children}</div>
      </StyledModalContent>
    </StyledModalContainer>
  );
};

export default Modal;
