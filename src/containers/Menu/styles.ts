import styled from "styled-components"

const StyledMenu = styled.section`
  position: relative;
  padding: 0 30px;
  background: var(--color-background);

  & > div:first-child {
    margin: 20px 0;
  }
`

export const StyledUnAuth = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  min-width: 300px;

  font-weight: 200;
  font-size: 36px;

  text-transform: lowercase;
  text-align: center;

  color: var(--color-text);
  opacity: 0.5;
`

export default StyledMenu
