import * as actionTypes from './../actions/actionTypes';

const intialState = {
    posts: [],
    loading: false,
    error: false,
    errorMsg: null
}

export default (state=intialState, actions) => {
    switch(actions.type) {
        case actionTypes.GET_POSTS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: state.posts.concat(actions.payload.posts),
            }
        case actionTypes.GET_POSTS_FAIL:

            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: actions.payload,
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
                    item.id === actions.payload.id ? actions.payload.updates : item,
                    ),
            }
        case actionTypes.UPDATE_POSTS_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: actions.payload,
            }
    default:
        return state;
    }
}