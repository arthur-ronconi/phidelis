// import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Convento } from "./pages/Convento";
import { Dashboard } from "./pages/Dashboard";
import { Publicacoes } from "./pages/Publicacoes";
import { Estados } from "./pages/Estados";
import { Slider } from "./pages/Slider";
import { Usuarios } from "./pages/Usuarios";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/convento">
            <Convento />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/dashboard/publicacoes">
            <Publicacoes />
          </Route>
          <Route path="/dashboard/estados">
            <Estados />
          </Route>
          <Route path="/dashboard/slider">
            <Slider />
          </Route>
          <Route path="/dashboard/usuarios">
            <Usuarios />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
