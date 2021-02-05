import * as actionTypes from './../actions/actionTypes';

const intialState = {
    posts: []
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
                posts: state.posts.concat(actions.payload.posts)
            }
        case actionTypes.GET_POSTS_FAIL:

            return {
                ...state,
                loading: false,
            }
    default:
        return state;
    }
}