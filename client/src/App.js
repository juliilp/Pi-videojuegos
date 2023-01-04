import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./vistas/LandingPage/LandingPage";
import Home from "./vistas/Home/Home";
import Detail from "./vistas/Detail/Detail";
import CreateGame from "./vistas/CreateGame/CreateGame";
import NotFound from "./componentes/NotFound/NotFound";
function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/:id" component={Detail} />
      <Route exact path="/createGame" component={CreateGame} />
      <Route exact path='*' component={NotFound}  />
      </Switch>
    </div>
  );
}

export default App;
