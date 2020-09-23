import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  useHistory,
  Switch,
  Route,
} from "react-router-dom";
import "./Profile.css";
import { getProfile } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import Container from "react-bootstrap/Container";
import NavbarHome from "../components/navbarhome.js";
import DisplayPicture from "../components/displaypicture.js";
import Post from "../components/post.js";
import Story from "../components/story.js";
import Igtv from "../components/igtv.js";
import Button from "react-bootstrap/Button";

export default function Profile() {
  const profileData = useSelector(store => store.profileReducers.profile);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("post");
  const { profile } = useParams();
  const { path, url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProfile(profile));
  }, [profile])

  if (!profileData)
    return <h1>Loading</h1>

  return (
    <div
      style={{ backgroundColor: "#FAFAFA" }}
      className="vh-100 overflow-auto"
    >
      <NavbarHome />
      <Container fluid="sm">
        <div className="hd-profile mt-3 mb-3">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={() => history.push(`/${profile}`)}
              className="mr-3 pointer"
            >
              <img className="rounded-circle" style={{width: "75px"}} alt="profile_pic" src={profileData.biography.profile_pic_hd} />
            </div>
            <div>
              <h5 style={{ fontWeight: 600 }}>
                {profileData.biography.full_name}
              </h5>
              <h6 style={{ fontWeight: 500 }}>@{profile}</h6>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="grid-profile">
              <h5 style={{ fontWeight: 600, textAlign: "center" }}>Posts</h5>
              <h5 style={{ fontWeight: 600, textAlign: "center" }}>
                Followers
              </h5>
              <h5 style={{ fontWeight: 600, textAlign: "center" }}>
                Following
              </h5>
              <h6 style={{ fontWeight: 500, textAlign: "center" }}>{profileData.biography.posts}</h6>
              <h6 style={{ fontWeight: 500, textAlign: "center" }}>{profileData.biography.followers}</h6>
              <h6 style={{ fontWeight: 500, textAlign: "center" }}>{profileData.biography.following}</h6>
            </div>
            <Button
              onClick={() =>
                window.open(
                  `https://www.instagram.com/${profile}`,
                  "_blank"
                )
              }
              variant="light"
              size="sm"
              style={{ fontWeight: 700, fontSize: "12px" }}
              className="ml-3 rounded-pill shadow-sm"
            >
              Open in Instagram
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => history.push(`${url}/post`)}
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            Posts
          </Button>
          <Button
            onClick={() => history.push(`${url}/story`)}
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            Stories
          </Button>
          <Button
            onClick={() => history.push(`${url}/igtv`)}
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            IGTV
          </Button>
        </div>
        <Switch>
          <Route exact path={`${path}`}>
            <DisplayPicture url={profileData.biography.profile_pic_hd} />
          </Route>
          <Route exact path={`${path}/post`}>
            <Post isPrivate={profileData.biography.is_private} post={profileData.posts} />
          </Route>
          <Route exact path={`${path}/story`}>
            <Story isPrivate={profileData.biography.is_private} highlight={profileData.highlight} story={[]} />
          </Route>
          <Route exact path={`${path}/igtv`}>
            <Igtv isPrivate={profileData.biography.is_private} igtv={profileData.igtv} />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
