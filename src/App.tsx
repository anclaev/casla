import { useDispatch, useSelector } from "react-redux"
import { ConnectedRouter } from "connected-react-router"

import { history, IState } from "./store"

import Styles from "./styles"
import Routes from "./routes"

import Layout from "./containers/Layout"

const App: React.FC = () => {
  const dispatch = useDispatch()
  const location = useSelector((state: IState) => state.router.location)
  const auth = useSelector((state: IState) => state.user.auth)

  return (
    <ConnectedRouter history={history}>
      <Styles />
      <Layout dispatch={dispatch} location={location} auth={auth}>
        <Routes auth={auth} />
      </Layout>
    </ConnectedRouter>
  )
}

export default App
