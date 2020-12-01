import { combinedReducers } from 'redux';
import userReducer from './../reducers/user';
export default combinedReducers({
    user: userReducer
})