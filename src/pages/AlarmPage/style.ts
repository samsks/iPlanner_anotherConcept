import styled from "styled-components";

export const StyledPageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .divButtons {
    display: flex;
    gap: 20px;
  }

  .divButtons > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9ecef;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  #ulAlarm {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    max-height: 675px;
    overflow-y: scroll;
  }

  #ulAlarm::-webkit-scrollbar {
    width: 10px;
  }

  #ulAlarm::-webkit-scrollbar-track {
    background: var(--grey-0);
    border: 2px solid var(--grey-0);
  }

  #ulAlarm::-webkit-scrollbar-thumb {
    background-color: var(--sky-2);
    border-radius: 20px;
    border: 2px solid var(--grey-0);
  }
`;
