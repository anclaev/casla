import { applyMiddleware, combineReducers, createStore, Store } from "redux"
import { BrowserHistory, createBrowserHistory } from "history"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import {
  connectRouter,
  routerMiddleware,
  RouterState,
} from "connected-react-router"

import appReducer, { IAppState } from "./reducers/app"
import userReducer, { IUserState } from "./reducers/user"

export const history: BrowserHistory = createBrowserHistory()

export interface IState {
  router: RouterState
  app: IAppState
  user: IUserState
}

const rootReducer = (history: BrowserHistory) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
    user: userReducer,
  })

const store: Store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
)

export default store
