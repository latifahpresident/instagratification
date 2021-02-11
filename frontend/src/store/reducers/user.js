import * as actionTypes from './../actions/actionTypes';

const intialState = {
    firebase_id: null,
    loading: false,
    users:  [],
    followers: [],
    posts: [],
    error: false,
    errorMsg: null,
    successMsg: null,
    loggedIn: false,
}

export default (state=intialState, action) => {
    switch(action.type) {
        case actionTypes.REGISTER_START: 
            return {
                ...state,
                loading: true,
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                // user: [...state.user, action.payload]
            }
        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.payload
            }
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload.user,
                posts: action.payload.posts,
                followers: action.payload.followers,
                loggedIn: true,
                firebase_id: action.payload.user[0].firebase_id
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.payload
            }
        case actionTypes.SIGNOUT_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.SIGNOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: false,
            }
        case actionTypes.SIGNOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.payload,
            }
        case actionTypes.SIGNIN_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                firebase_id: action.payload,
            }
        case actionTypes.SIGNIN_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.payload,
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
                users: state.users.concat(action.payload.users)
            }
        case actionTypes.GET_USERS_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: action.payload,
                error: true
            }
        case actionTypes.GET_USER_BY_ID_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload.user,
                posts: action.payload.posts,
                followers: action.payload.followers,
                loggedIn: true,
            }
            case actionTypes.GET_USER_BY_ID_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: true,
                    errorMsg: action.payload
                }
    default:
        return state;
    }
}