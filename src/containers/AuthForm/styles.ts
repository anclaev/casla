import styled from "styled-components"

const StyledAuthForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    display: block;
    margin-bottom: 50px;

    font-weight: 300;
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;

    color: var(--color-text);
  }

  & > input[type="text"] {
    width: 80%;
    max-width: 410px;
  }
`

export default StyledAuthForm
