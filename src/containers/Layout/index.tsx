import { IProps } from "../../core"

import Lang from "../Lang"
import Menu from "../Menu"

import Styled from "./styles"

const Layout: React.FC<IProps> = ({ children, dispatch }) => (
  <Styled>
    <Menu />
    {children}
    <Lang dispatch={dispatch} />
  </Styled>
)

export default Layout
