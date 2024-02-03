import "./App.css";
import Blog from "./Blog";
import ListadoPeliculas from "./ListadoPeliculas";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <ListadoPeliculas />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
