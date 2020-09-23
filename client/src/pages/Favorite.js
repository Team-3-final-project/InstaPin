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
import {useQuery, gql} from '@apollo/client'
import {FETCH_ALL, FETCH_POSTS, GET_NAME} from '../Query'
export default function Favorites() {
  const { path, url } = useRouteMatch();
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
      <h1>Your Pin</h1>
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
            onClick={() => history.push(`${url}/stories`)}
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            IGTV
          </Button>
        </div>
        <Switch>
          <Route exact path={`${url}/highlights`}>
          <FavoritePost data={favorites.highlights} name="highlights" />
            {/* <DisplayPicture url={profileData.biography.profile_pic_hd} /> */}
          </Route>
          <Route exact path={`${url}/posts`}>
              {/* <FavoritePost /> */}
            <FavoritePost data={favorites.posts} name="posts" />
          </Route>
          <Route exact path={`${url}/stories`}>
            <FavoritePost data={favorites.stories} name="stories" />
            {/* <Story isPrivate={profileData.biography.is_private} highlight={profileData.highlight} story={[]} /> */}
          </Route>
          <Route exact path={`${url}/igtvs`}>
          <FavoritePost data={favorites.igtvs} name="igtvs" />
            {/* <Igtv isPrivate={profileData.biography.is_private} igtv={profileData.igtv} /> */}
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
