import styled from "styled-components"

const StyledBackground = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;

  &,
  & > video {
    top: 0;
    left: 0;
  }

  & > video {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media (min-aspect-ratio: 16/9) {
    & > video {
      height: 200%;
      top: -50%;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    & > video {
      width: 200%;
      left: -50%;
    }
  }

  @supports (object-fit: cover) {
    & > video {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export default StyledBackground
