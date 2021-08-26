import { ChangeEvent, useMemo, useState } from "react"
import { useIntl } from "react-intl"
import { getCurrentHour, setTimeMessage } from "../../core"

import Textbox from "../../components/Textbox"

import Styled from "./styles"

const AuthForm: React.FC = () => {
  const [login, setLogin] = useState("")
  const time = useMemo(() => setTimeMessage(getCurrentHour()), [])
  const intl = useIntl()

  const loginHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setLogin(e.target.value)

  return (
    <Styled>
      <span>{intl.formatMessage({ id: time })}</span>
      <Textbox
        value={login}
        onChange={loginHandler}
        placeholder={intl.formatMessage({ id: "inputPlaceholder" })}
      />
    </Styled>
  )
}

export default AuthForm
