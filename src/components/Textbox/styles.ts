import styled from "styled-components"

const StyledTextBox = styled.input`
  border-bottom: 1px solid #fff;
  padding: 10px;

  font-weight: 300;
  font-size: 24px;

  opacity: 0.5;
  transition: 0.2s;

  &:focus,
  &[data-valid="true"] {
    opacity: 1;
  }

  &[data-valid="true"] {
    border-color: var(--color-violet);
  }
`

export default StyledTextBox
