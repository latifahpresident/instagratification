import * as postsTypes from "./actionTypes";
import axios from "./../../utilities/axiosinstance";

export const getPosts = () => (dispatch) => {
    dispatch ({
        type: postsTypes.GET_POSTS_START,
    })
    axios.get(`posts/posts`).then(res => {
        if (res.status === 404) {
            dispatch ({
                type: postsTypes.GET_POSTS_FAIL,
                payload: res.data.message
            })
        } else {
            dispatch ({
                type: postsTypes.GET_POSTS_SUCCESS,
                payload: res.data
            })
        }
    }).catch (err => {
        dispatch ({
            type: postsTypes.GET_POSTS_FAIL,
            payload: err
        })
    })
};

export const updatePosts = (updates) => (dispatch) => {
    const id = updates.id;
    dispatch ({
        type: postsTypes.UPDATE_POSTS_START,
    })
    axios.put(`/posts/update/${id}`, {...updates}).then(res => {
        if (res.status === 404) {
            dispatch({
                type: postsTypes.UPDATE_POSTS_FAIL,
                payload: res.data.message
            })
        } else if (res.status === 201) {
            const message = res.data.message
            dispatch({
                type: postsTypes.UPDATE_POSTS_SUCCESS,
                payload: {updates: res.data.updates, id, message}, 
            })
        }
    }).catch (err => {
        dispatch({
            type: postsTypes.UPDATE_POSTS_FAIL,
            payload: err
        })
    }) 
};