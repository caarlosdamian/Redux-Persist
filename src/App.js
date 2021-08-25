import "./App.css";
import {Route, Switch} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
function App() {
  return (
    <Switch >
      <Route path='/' exact component={Login}/>
      <Route path='/home' exact component={Home}/>
    </Switch>
  );
}

export default App;
