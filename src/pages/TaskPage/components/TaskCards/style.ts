import styled from "styled-components";

export const StyledTaskCards = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  height: 60px;
  background-color: var(--grey-1);
  gap: 12px;
  padding: 20px 15px;
  position: relative;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border-color: var(--color-primary);
  }

  .absolute-container {
    position: absolute;
    right: 15px;
    display: flex;
    gap: 12px;
  }

  .taskCompletedLine {
    text-decoration-line: line-through;
  }
`;
