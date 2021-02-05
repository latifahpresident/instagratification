import * as postsTypes from "./actionTypes";
import axios from "./../../utilities/axiosinstance";

export const getPosts = () => (dispatch) => {
    console.log("in acrion POSTS")

    dispatch ({
        type: postsTypes.GET_POSTS_START,
    })
    axios.get(`posts/posts`).then(res => {
        console.log("TOP of GET POSTS", res.data)
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