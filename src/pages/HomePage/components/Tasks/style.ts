import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 8px;
    height: 60px;
    background-color: var(--grey-1);
    gap: 12px;
    padding: 20px 15px;
    position: relative;

    div {
      display: flex;
      gap: 10px;
    }
  }

  ul::-webkit-scrollbar {
    width: 10px;
  }

  ul::-webkit-scrollbar-track {
    background: var(--grey-0);
    border: 2px solid var(--grey-0);
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--sky-2);
    border-radius: 20px;
    border: 2px solid var(--grey-0);
  }
`;
