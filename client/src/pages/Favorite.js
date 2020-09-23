import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  useHistory,
  Switch,
  Route,
} from "react-router-dom";
import FavoritePost from '../components/favoritePost.js'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {useQuery} from '@apollo/client'
import {FETCH_ALL} from '../Query'
import NavbarHome from '../components/navbarhome.js'

export default function Favorites() {
  const { url } = useRouteMatch();
  const history = useHistory();

  const {loading, error, data} = useQuery(FETCH_ALL, {
    variables: { access_token: localStorage.access_token }
  })

  if(loading) return <h1>Loading...</h1>
  if(error) return <p>Error...  {JSON.stringify(error)}</p>

  const favorites = data.getFavorites
  return (
    <div
      style={{ backgroundColor: "#FAFAFA" }}
      className="vh-100 overflow-auto"
    >
      <NavbarHome />
      <h1 style={{textAlign: 'center'}}>Your Favorites</h1>
      <Container fluid="sm">

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => history.push(`${url}/posts`)}
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            Posts
          </Button>
          <Button
            onClick={() => history.push(`${url}/stories`)}
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            Stories
          </Button>
          <Button
            onClick={() => history.push(`${url}/igtvs`)}
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            IGTV
          </Button>
          <Button
            onClick={() => history.push(`${url}/highlights`)}
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            Highlights
          </Button>
        </div>
        <Switch>
          <Route exact path={`${url}/highlights`}>
          <FavoritePost data={favorites.highlights} name="highlights" />
          </Route>
          <Route exact path={`${url}/posts`}>
            <FavoritePost data={favorites.posts} name="posts" />
          </Route>
          <Route exact path={`${url}/stories`}>
            <FavoritePost data={favorites.stories} name="stories" />
          </Route>
          <Route exact path={`${url}/igtvs`}>
          <FavoritePost data={favorites.igtvs} name="igtvs" />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
