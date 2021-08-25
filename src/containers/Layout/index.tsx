import { IntlProvider } from "react-intl"
import { useSelector } from "react-redux"

import { IAuthProps } from "../../core"
import { IState } from "../../store"

import Lang from "../Lang"
import Menu from "../Menu"
import Background from "../Background"

import messages from "../../i18n/messages"
import { LOCALES } from "../../i18n/locales"

import Styled from "./styles"

const Layout: React.FC<IAuthProps> = ({ children, dispatch, auth }) => {
  const lang = useSelector((state: IState) => state.app.lang)

  return (
    <IntlProvider
      messages={messages[lang]}
      locale={lang}
      defaultLocale={LOCALES.ENGLISH}
    >
      <Styled>
        <Menu auth={auth} />
        <main>
          {children}
          <Background />
        </main>
        <Lang dispatch={dispatch} />
      </Styled>
    </IntlProvider>
  )
}

export default Layout
