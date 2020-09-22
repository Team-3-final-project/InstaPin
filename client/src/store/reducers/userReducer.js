const initialState = {
    access_token: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_REGIS":
            return {
                ...state,
                access_token: action.payload.access_token
            }
        case "SET_USER_LOGIN":
            return {
                ...state,
                access_token: action.payload.access_token
            }
        default:
            return state
    }
}