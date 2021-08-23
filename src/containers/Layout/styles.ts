import styled from "styled-components"

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(60px, 260px) 1fr;
  height: inherit;

  & > section,
  & > main,
  & > main > div {
    height: inherit;
  }

  & > main,
  & > main > section {
    position: relative;
  }

  & > main > div {
    position: absolute;
    z-index: -2;
  }

  & > main > div:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.2;
    z-index: 0;
  }
`

export default StyledLayout
