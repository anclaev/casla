import { useSelector } from "react-redux"

import Styled from "./styles"

import { setAppLang } from "../../store/reducers/app"
import { IState } from "../../store"
import { IProps, Lang as LangProps } from "../../core"

const Lang: React.FC<IProps> = ({ dispatch }) => {
  const lang: LangProps = useSelector((state: IState) => state.app.lang)

  const changeLang = () =>
    dispatch ? dispatch(setAppLang(lang === "ru" ? "en" : "ru")) : null

  return (
    <Styled onClick={() => changeLang()}>
      <span data-lang={lang === "ru" ? true : undefined}>ru</span>
      <span data-lang={lang === "en" ? true : undefined}>en</span>
    </Styled>
  )
}

export default Lang
