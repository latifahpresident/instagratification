import { combineReducers} from 'redux';
import userReducer from './../reducers/user';
import postsReducer from './../reducers/posts';

export default combineReducers({
    user: userReducer,
    posts: postsReducer
})