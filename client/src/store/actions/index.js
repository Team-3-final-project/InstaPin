const url = "http://localhost:3001";

export function getProfile(profile) {
  return (dispatch, getState) => {
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
