const initialState = {
    story: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_STORY":
            return {
                ...state,
                story: action.payload.story
            }
        default:
            return state
    }
}
