import { Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./vistas/LandingPage/LandingPage";
import Home from "./vistas/Home/Home";
import Detail from "./vistas/Detail/Detail";
import CreateGame from "./vistas/CreateGame/CreateGame";

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/:id" component={Detail} />
      <Route exact path="/createGame" component={CreateGame} />
    </div>
  );
}

export default App;
