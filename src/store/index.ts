import { connectRouter, routerMiddleware } from "connected-react-router"
import { BrowserHistory, createBrowserHistory } from "history"
import { applyMiddleware, combineReducers, createStore, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import appReducer from "./reducers/app"
import thunk from "redux-thunk"

export const history: BrowserHistory = createBrowserHistory()

const rootReducer = (history: BrowserHistory) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
  })

const store: Store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
)

export default store
