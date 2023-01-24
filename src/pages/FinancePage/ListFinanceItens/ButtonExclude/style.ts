import styled from "styled-components";

export const ButtonExcludeButton = styled.button`
  height: fit-content;
  background-color: transparent;
  cursor: pointer;

  .trashIcon {
    height: 1.2rem;
    width: 1.2rem;
  }

  .trashIcon:hover {
    color: var(--color-third);
  }
`;
