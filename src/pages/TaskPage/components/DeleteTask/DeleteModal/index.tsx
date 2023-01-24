import React from "react";
import { StyledModal } from "./style";
import { AiOutlineClose } from "react-icons/ai";

interface iModalProps {
  children: React.ReactNode;
  handleDeleteModal: () => void;
  title?: string;
}

const DeleteModal = ({ children, handleDeleteModal }: iModalProps) => {
  return (
    <StyledModal
      onClick={() => {
        handleDeleteModal;
      }}
    >
      <div className="delete-modal-content">
        <div className="modal-header">
          <h3>Confirmação</h3>
          <button onClick={handleDeleteModal}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="modal-children">{children}</div>
      </div>
    </StyledModal>
  );
};

export default DeleteModal;
