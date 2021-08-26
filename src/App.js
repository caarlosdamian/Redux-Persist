import "./App.css";
import { Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import { connect } from "react-redux";
import { PrivateRoute, PublicRoute } from "./routes/routesChecks";
import { HOME_PATH, LOGIN_PATH } from "./routes/routesPath";
function App({ user }) {
  return (
    <Switch>
      <PublicRoute
        path={LOGIN_PATH}
        exact
        component={Login}
        loggedInPath={HOME_PATH}
      />
      <PrivateRoute path={HOME_PATH} exact component={Home} />
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);
