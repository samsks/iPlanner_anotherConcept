import styled from "styled-components";

export const StyledTasks = styled.div`
  display: flex;
  height: 100%;
  gap: 60px;
  padding: 15px 40px;

  * {
    scrollbar-width: auto;
    scrollbar-color: var(--grey-2) #ffffff;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: none;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--grey-2);
    border-radius: 10px;
    border: 3px solid transparent;
  }

  @media (max-width: 685px) {
    gap: 40px;
    padding: 15px 20px;
  }

  @media (max-width: 570px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media (max-width: 425px) {
    padding: 10px;
  }
`;
