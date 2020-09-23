import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Register from './pages/Register';
import Login from './pages/Login';
import { Provider } from "react-redux";
import store from "./store";
import Favorites from './pages/Favorite.js'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div style={{ fontFamily: "Montserrat" }}>
          <Router>
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/:profile" component={Profile} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Router>
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
