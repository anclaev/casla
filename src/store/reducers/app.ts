import { Action } from "redux"
import { Lang } from "../../core"
import { APP_CHANGE_LANG } from "../actionTypes"

export interface IAppState {
  lang: Lang
}

export interface IAction extends Action {
  payload: {
    [key: string]: any
  }
}

const initialState: IAppState = {
  lang: "en",
}

const appReducer = (state: IAppState = initialState, action: IAction) => {
  switch (action.type) {
    case APP_CHANGE_LANG: {
      return {
        ...state,
        lang: action.payload.lang,
      }
    }

    default:
      return state
  }
}

export const setAppLang = (lang: Lang) => ({
  type: APP_CHANGE_LANG,
  payload: {
    lang,
  },
})

export default appReducer
