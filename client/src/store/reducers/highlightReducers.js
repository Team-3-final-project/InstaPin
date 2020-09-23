const initialState = {
  highlight: null,
  highlightData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_HIGHLIGHT":
      return {
        ...state,
        highlight: action.payload.highlight,
      };
    case "SET_HIGHLIGHT_DATA":
      return {
        ...state,
        highlightData: action.payload.highlightData,
      };
    default:
      return state;
  }
};
