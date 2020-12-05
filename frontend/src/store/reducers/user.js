import * as actionTypes from './../actions/actionTypes';

const intialState = {
    firebase_id: null,
    email: null,
    full_name: null,
    username: null,
    profile_url: null,
    loading: false,
    loggedIn: false,
    error: false,
    errorMsg: null,
    successMsg: null,
}

export default (state=intialState, actions) => {
    switch(actions.type) {
        case actionTypes.REGISTER_START: 
            return {
                ...state,
                loading: true,
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
    default:
        return state;
    }
}