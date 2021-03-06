const initialState = {
  profile: null
}

export default (state=initialState, actions) => {
  switch (actions.type)
  {
    case "SET_PROFILE":
      return {...state, profile: actions.payload.profile}
    default:
      return state;
  }
}
