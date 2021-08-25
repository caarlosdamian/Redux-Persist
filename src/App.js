import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import { connect } from "react-redux";
function App({ user }) {
  console.log(user);
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user};
};

export default connect(mapStateToProps)(App);
