import { IProps } from "../../core"

import Lang from "../Lang"
import Menu from "../Menu"
import Background from "../Background"

import Styled from "./styles"

const Layout: React.FC<IProps> = ({ children, dispatch }) => (
  <Styled>
    <Menu />
    <main>
      {children}
      <Background />
    </main>
    <Lang dispatch={dispatch} />
  </Styled>
)

export default Layout
