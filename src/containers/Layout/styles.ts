import Poster from "../../assets/imgs/poster.png"

import styled from "styled-components"

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(60px, 260px) 1fr;
  height: inherit;

  & > section {
    height: inherit;
  }

  & > section:last-child {
    position: relative;
    background: url("${Poster}") center center / cover no-repeat;
    z-index: -2;
  }

  & > section:last-child:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.3;
    z-index: -1;
  }
`

export default StyledLayout
