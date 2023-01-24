import styled from "styled-components";

export const StyledEditTask = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 35px;

  > div > label {
    display: flex;
    gap: 10px;
  }

  .div-button {
    display: flex;
    justify-content: space-between;

    button {
      padding: 20px;
    }
  }
`;
