import { css } from "styled-components"

const Reset = css`
  * {
    box-sizing: border-box;
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
    font: inherit;
  }

  li {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  body {
    height: 100%;
  }
  input[type="text"] {
    border-radius: 0;
  }
`

export default Reset
