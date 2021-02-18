import * as actionTypes from './../actions/actionTypes';

const intialState = {
    posts: [],
    loading: false,
    error: false,
    errorMsg: null,
    successMsg: null,
}

export default (state=intialState, action) => {
    switch(action.type) {
        case actionTypes.GET_POSTS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: state.posts.concat(action.payload.posts).reverse(),
            }
        case actionTypes.GET_POSTS_FAIL:

            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.payload,
            }
        case actionTypes.UPDATE_POSTS_START:
        return {
            ...state,
            loading: true,
        }
        case actionTypes.UPDATE_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: state.posts.map(item =>
                    item.id === action.payload.id ? action.payload.updates : item,
                    ),
            }
        case actionTypes.UPDATE_POSTS_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.payload,
            }
        case actionTypes.NEW_POSTS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.NEW_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                successMsg: action.payload,
            }
        case actionTypes.NEW_POSTS_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.payload.message,
            }
        case actionTypes.ADD_COMMENT_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                successMsg: action.payload,
            }
        case actionTypes.ADD_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.payload.message,
            }
    default:
        return state;
    }
}