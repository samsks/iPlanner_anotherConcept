import styled from "styled-components";

export const StyledLoading = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  perspective: 800px;

  .loader-item {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .loader-item:nth-child(1) {
    border-bottom: 6px solid var(--color-primary);
    transform: rotateX(35deg) rotateY(-45deg);
    animation: rotate-one 1s linear infinite;
  }

  .loader-item:nth-child(2) {
    border-top: 6px solid var(--color-secondary);
    transform: rotateX(50deg) rotateY(10deg);
    animation: rotate-two 1s linear infinite;
  }

  .loader-item:nth-child(3) {
    border-right: 6px solid var(--color-third);
    transform: rotateX(35deg) rotateY(55deg);
    animation: rotate-three 1s linear infinite;
  }

  @keyframes rotate-one {
    to {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }

  @keyframes rotate-two {
    to {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes rotate-three {
    to {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
`;
