import * as actionTypes from './actionTypes';
import axios from "./../../utilities/axiosinstance";
import {auth} from "./../../utilities/firebaseConfig";

export const start = (type) => {
    return { type: type }
}

export const success = (type, data) => {
    return { type: type, payload: data }
}

export const fail = (type, err) => {
    return { type: type, payload: err }
}

export const authenticateUser = (uid, idToken) => async dispatch => {
    dispatch(start(actionTypes.AUTH_START));
    try {
        if (uid) {
            axios.defaults.headers.common["Authorization"] = idToken;
            const res = await axios.get(`/user/profile/${uid}`);
            if (res.status === 200) { 
                dispatch(success(actionTypes.AUTH_SUCCESS, res.data)) }
        } else { 
            dispatch(fail(actionTypes.AUTH_FAIL, 'There was a problem logging in. Please try again.')) }
    } catch (err) {
        dispatch(fail(actionTypes.AUTH_FAIL, err))
    }
};

export const signOut = () => dispatch => {
    dispatch(start(actionTypes.SIGNOUT_START));
    try {
        // const signOut = await 
        auth.signOut();
        dispatch(success(actionTypes.SIGNOUT_SUCCESS, true));
    } catch (err) {
        dispatch(fail(actionTypes.SIGNOUT_FAIL, err))
    }
    
};

export const signIn = (email, password) => async dispatch => {
    dispatch(start(actionTypes.SIGNIN_START));
    try {
        const user = await auth.signInWithEmailAndPassword(email, password);
        console.log("USER FROM SIGN IN", user.user.uid)
        if (user) {
            console.log("user", user);
            dispatch(success(actionTypes.SIGNIN_SUCCESS, user.user.uid));
        } else {
            dispatch(fail(actionTypes.SIGNIN_FAIL, 'There was an error signing in.'))
        }
    } catch (err) {
        dispatch(fail(actionTypes.SIGNIN_FAIL, err))
    }
    
};

export const register = (userObj) => async dispatch => {
    console.log("USER OBBJ FROM REGISTER", userObj)
    const data = {
        email: userObj.email,
        firebase_id: userObj.firebase_id,
        full_name: userObj.full_name,
        username: userObj.username,
        profile_url: userObj.profile_url,
    };
        try {
            const res = await axios.post("/signup", {...userObj})
            if (res.status === 201) {
                dispatch(success(actionTypes.REGISTER_SUCCESS, data));
            } else {
                dispatch( fail(actionTypes.REGISTER_FAIL, res.data.message));
            }  
        } catch (err) {
            dispatch(fail(actionTypes.REGISTER_FAIL, err))
            console.log("error from register", err)
        }
    


}

export const getUsers = () => (dispatch) => {
    dispatch (
        
        {
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

export const getUsersById = (id) => async dispatch => {
    dispatch (start(actionTypes.GET_USER_BY_ID_START))
   try {
    const res = await axios.get(`/user/profile/${id}`);
    console.log("response from get by id", id)
    if (res.status === 404) { dispatch (fail(actionTypes.GET_USER_BY_ID_FAIL, res.data.message)) } 
    else { dispatch (success(actionTypes.GET_USER_BY_ID_SUCCESS, res.data)) }
   }
    catch (err) {
        dispatch (fail(actionTypes.GET_USER_BY_ID_FAIL, err))
    }
};