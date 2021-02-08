import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getUsersById } from "../../store/actions/user";

const Profile = (props) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.users);
    const posts = useSelector(state => state.user.posts);
    const followers = useSelector(state => state.user.followers);
    const { id } = props.match.params;
    console.log("user FROM PROFILE", user)

    useEffect(() => {
        dispatch(getUsersById("04"))
        console.log("render")
    }, [dispatch]);

    return (
        <div>profile!</div>
    )
};

export default Profile