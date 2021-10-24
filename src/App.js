import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
//import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import { MovieLover } from "./components/MovieLover";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route eaxct path="/movielover">
            <MovieLover />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;