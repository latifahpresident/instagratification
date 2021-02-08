import * as actionTypes from './../actions/actionTypes';

const intialState = {
    loading: false,
    users:  [],
    followers: [],
    posts: [],
    error: false,
    errorMsg: null,
    successMsg: null,
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
                errorMsg: actions.payload,
                error: true
            }
        case actionTypes.GET_USERS_BY_ID_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_USERS_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                users: actions.payload.user,
                posts: actions.payload.posts,
                followers: actions.payload.followers
            }
        case actionTypes.GET_USERS_BY_ID_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: actions.payload
            }
    default:
        return state;
    }
}