import { useDispatch, useSelector } from "react-redux"
import { Route, Switch } from "react-router"
import { ConnectedRouter } from "connected-react-router"

import { history, IState } from "./store"

import Styles from "./styles"

import Layout from "./containers/Layout"

import Hello from "./pages/Hello"
import Error from "./pages/Error"

const App: React.FC = () => {
  const dispatch = useDispatch()
  const location = useSelector((state: IState) => state.router.location)

  return (
    <ConnectedRouter history={history}>
      <Styles />
      <Layout dispatch={dispatch} location={location}>
        <Switch>
          <Route exact path="/">
            <Hello />
          </Route>
          <Route render={() => <Error />} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  )
}

export default App
