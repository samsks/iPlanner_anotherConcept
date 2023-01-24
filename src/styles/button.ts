import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonSize?: "big" | "small";
  buttonType?: "inactive";
}

export const StyledButton = styled.button<iStyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 600;

  color: var(--grey-3);
  background-color: var(--grey-0);

  border-radius: 25px;

  border: 1px solid var(--grey-3);

  transition: 0.3s;
  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "big":
        return css`
          width: 340px;
          max-width: 90%;
          height: 48px;
        `;
      case "small":
        return css`
          max-width: 90%;
          height: 32px;
        `;
      default:
        return css`
          width: 140px;
          max-width: 90%;
          height: 48px;
        `;
    }
  }}
  ${({ buttonType }) => {
    switch (buttonType) {
      case "inactive":
        return css`
          color: var(--grey-3);
          background: var(--grey-1);
          border-color: var(--grey-3);
        `;
      default:
        return css`
          background-color: var(--grey-0);
        `;
    }
  }}

  &:hover {
    color: var(--grey-0);
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
