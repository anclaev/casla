import Styled from "./styles"

import { IInput } from "../../core"

const Textbox: React.FC<IInput> = (props) => (
  <Styled
    type="text"
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    data-valid={props.value.length > 6 ? true : false}
  />
)

export default Textbox
