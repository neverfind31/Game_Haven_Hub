import { SET_AUTH_LOADING } from "../types"



export const setAuthLoading = (data) => {
    return dispatch => {
        dispatch({
            type: SET_AUTH_LOADING,
            payload: data
        })
    }
}

