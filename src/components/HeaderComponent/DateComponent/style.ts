import styled from "styled-components";

export const StyledClock = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

export const StyledDate = styled.p`
  font-size: 12px;
  padding-bottom: 3px;
`;

export const StyledDateAndClock = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 500px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 3px;
    margin-top: 10px;
  }

  @media (max-width: 950px) {
    margin: 0 3rem;
  }
`;
