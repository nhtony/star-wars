import { Switch, Route } from "react-router-dom";
import routes from "./routes";

export default function Router() {
  return (
    <Switch>
      {Object.values(routes).map((route) => {
        const { path, exact = false, Component } = route;

        return (
          <Route key={path} path={path} exact={exact} component={Component} />
        );
      })}
    </Switch>
  );
}
