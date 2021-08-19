import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import App from "./App"
import Styles from "./styles"
import store from "./store"

render(
  <React.StrictMode>
    <Provider store={store}>
      <Styles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
)
