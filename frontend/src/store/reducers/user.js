import * as actionTypes from './../actions/actionTypes';

const intialState = {
    // firebase_id: null,
    // email: null,
    // full_name: null,
    // username: null,
    // profile_url: null,
    loading: false,
    loggedIn: false,
    error: false,
    errorMsg: null,
    successMsg: null,
    users:  [],
    followers: [],
    posts: []
}

export default (state=intialState, actions) => {
    switch(actions.type) {
        case actionTypes.REGISTER_START: 
            return {
                ...state,
                loading: true,
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.GET_USERS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.concat(actions.payload.users)
            }
        case actionTypes.GET_USERS_FAIL:

            return {
                ...state,
                loading: false,
            }
    default:
        return state;
    }
}