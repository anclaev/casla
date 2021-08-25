import { Route, Switch } from "react-router"

import { IAuthProps } from "./core"

import Error from "./pages/Error"
import Hello from "./pages/Hello"

const Routes: React.FC<IAuthProps> = ({ auth }) =>
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
