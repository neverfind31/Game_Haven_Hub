import { SET_AUTH_LOADING } from "../types";

const initialState = {
    data: null,
    authLoading: true,
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                authLoading: payload
            };

        case "AUTH_SUCCESS":
            return {
                ...state,
                data: action.payload
            };

        default:
            return state;
    }
}