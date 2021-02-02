import * as actionTypes from './../actions/actionTypes';

const intialState = {
    posts: []
};

export default (state=intialState, action) => {
  switch(action) {
      case actionTypes.GET_POSTS_START:
        return {
            ...state,
            posts: action.payload.posts
        }
    default: 
        return state;
  }  
};