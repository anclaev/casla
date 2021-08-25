import { FormattedMessage } from "react-intl"

import Styled, { StyledUnAuth } from "./styles"

import Logo from "../../components/Logo"

import { IAuthProps } from "../../core"

const UnAuthMessage = () => (
  <StyledUnAuth>
    <FormattedMessage id={"unAuthMessage"} />
  </StyledUnAuth>
)

const Menu: React.FC<IAuthProps> = ({ auth }) => (
  <Styled>
    <Logo />
    {!auth && <UnAuthMessage />}
  </Styled>
)

export default Menu
