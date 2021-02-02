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
    };


}

export const getUsers = () => (dispatch) => {
    dispatch ({
        type: actionTypes.GET_USERS_START
    })
    axios.get("/admin/users").then(res => {
        if (res.status === 404) {
            dispatch ({
                type: actionTypes.GET_USERS_FAIL,
                payload: res.data.message
            })
        } else {
            dispatch ({
                type: actionTypes.GET_USERS_SUCCESS,
                payload: res.data
            })
        }
        
    })
    .catch (err => {
        dispatch ({
            type: actionTypes.GET_USERS_FAIL,
            payload: err
        })
    })
};