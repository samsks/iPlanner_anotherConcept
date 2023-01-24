import styled, { css } from "styled-components";
import { BaseTypography } from "./components/typography";

interface iTitleProps {
  fontSize?: string;
}

export const Title = styled(BaseTypography)<iTitleProps>`
  font-size: 1rem;
  color: #000;

  &&.grey {
    color: #00000025;
  }

  &&.primary {
    color: #00ff;
  }

  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-style: normal;
        `;

      case "two":
        return css`
          font-style: normal;
        `;

      case "three":
        return css`
          font-style: normal;
        `;
    }
  }}
`;

export const Text = styled(BaseTypography)<iTitleProps>`
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  color: var(--grey-4);
  &&.bold {
    font-weight: 600;
    line-height: 18px;
  }
  &&.italic {
    font-style: italic;
  }
  &&.grey {
    color: #00000025; //alterar
  }
  &&.primary {
    color: #00ff; //alterar
  }
`;
