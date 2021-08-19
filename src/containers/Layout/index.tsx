import { IProps } from "../../core"
import Menu from "../Menu"

import Styled from "./styles"

const Layout: React.FC<IProps> = ({ children }) => (
  <Styled>
    <Menu />
    {children}
  </Styled>
)

export default Layout
