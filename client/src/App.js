import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ fontFamily: "Montserrat" }}>
        <Router>
          <Switch>
            <Route path="/:profile" component={Profile} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
