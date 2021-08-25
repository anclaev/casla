import { Route, Switch } from "react-router"

import { IRoutes } from "./core"

import Error from "./pages/Error"
import Hello from "./pages/Hello"

const Routes: React.FC<IRoutes> = ({ auth }) =>
  auth ? (
    <Switch>
      <Route render={() => <Error />} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/">
        <Hello />
      </Route>
      <Route render={() => <Error />} />
    </Switch>
  )

export default Routes
