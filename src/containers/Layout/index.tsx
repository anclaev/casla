import { IntlProvider } from "react-intl"
import { useSelector } from "react-redux"

import { IProps } from "../../core"
import { IState } from "../../store"

import Lang from "../Lang"
import Menu from "../Menu"
import Background from "../Background"

import messages from "../../i18n/messages"
import { LOCALES } from "../../i18n/locales"

import Styled from "./styles"

const Layout: React.FC<IProps> = ({ children, dispatch }) => {
  const lang = useSelector((state: IState) => state.app.lang)

  return (
    <IntlProvider
      messages={messages[lang]}
      locale={lang}
      defaultLocale={LOCALES.ENGLISH}
    >
      <Styled>
        <Menu />
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
