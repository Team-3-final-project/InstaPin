const url = "http://localhost:3001";

export function getProfile(profile) {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_PROFILE",
      payload: {
        profile: null
      }
    })
    fetch(`${url}/${profile}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        dispatch({
          type: "SET_PROFILE",
          payload: {
            profile: data
          }
        })
        console.log(getState());
      })
      .catch(err => console.log(err))
  }
}

export function getHighlight(profile) {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_HIGHLIGHT_DATA",
      payload: {
        highlight: null
      }
    })
    console.log("SET_HIGHLIGHT_DATA")
    fetch(`${url}/highlight/${profile}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        dispatch({
          type: "SET_HIGHLIGHT_DATA",
          payload: {
            highlightData: data.highlight
          }
        })
        console.log(getState());
      })
      .catch(err => console.log(err));
  }
}

export function getStory(profile, highlight) {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_STORY",
      payload: {
        story: null
      }
    })
    fetch(`${url}/story/${profile}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        dispatch({
          type: "SET_STORY",
          payload: {
            story: data
          }
        })
        if (highlight) {
          fetch(`${url}/get_highlight/${profile}`)
          .then(resp => resp.json())
          .then(data => {
            console.log(data);
            dispatch({
              type: "SET_HIGHLIGHT",
              payload: {
                highlight: data.highlight
              }
            })
          })
          .catch(err => console.log(err));
        }
        console.log(getState());
      })
      .catch(err => console.log(err));
  }
}
