import styled from "styled-components";

export const StyledUserCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;

  img {
    border-radius: 50%;
    width: 45px;
    height: 45px;
    border: 2px solid transparent;
    object-fit: cover;

    &:hover {
      border-color: var(--color-primary);
    }
  }

  .textUser {
    font-weight: 700;
  }

  @media (max-width: 400px) {
    .textUser {
      display: none;
    }
  }
`;
