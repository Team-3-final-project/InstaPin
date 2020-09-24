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
        dispatch({
          type: "SET_PROFILE",
          payload: {
            profile: data
          }
        })
      })
      .catch(err => console.log(err))
  }
}

export function getHighlight(profile) {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_HIGHLIGHT",
      payload: {
        highlight: null
      }
    })
    fetch(`${url}/highlight/${profile}`)
      .then(resp => resp.json())
      .then(data => {
        const newData = [];

        for (let i of data.data) {
          for (let j of i.items)
            newData.push(j);
        }
        dispatch({
          type: "SET_HIGHLIGHT",
          payload: {
            highlight: newData
          }
        })
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
        dispatch({
          type: "SET_STORY",
          payload: {
            story: data
          }
        })
      })
      .catch(err => console.log(err));
  }
}
