import * as actionTypes from './actionTypes';
import axios from "./../../utilities/axiosinstance";

export const register = (userObj) => {
    const data = {
        email: userObj.email,
        firebase_id: userObj.firebase_id,
        full_name: userObj.full_name,
        username: userObj.username,
        profile_url: userObj.profile_url,
    };
    return async dispatch => {
        try {
            const res = await axios.post("/signup", {...userObj})
            if (res.status === 201) {
                dispatch({
                    type: actionTypes.REGISTER_SUCCESS,
                    payload: data
                });
            } else {
                dispatch({
                    type: actionTypes.REGISTER_FAIL,
                    payload: res.data.message
                });
            }
            
        } catch (err) {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                payload: err
            })
            console.log("error from register", err)
        }
    }
}