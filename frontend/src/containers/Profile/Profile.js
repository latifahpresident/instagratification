import React from "react";
import {useSelector} from "react-redux";

const Profile = (props) => {
    const user = useSelector(state => state.user.users);
    const loading = useSelector(state => state.user.loading)
    const posts = useSelector(state => state.user.posts);
    const followers = useSelector(state => state.user.followers);

    return (
        <div style={{border: '1px solid orange', marginTop: '6rem', height: '500px'}}>
            { loading ? `loading` : user.map((item, index)=> (
            <h1 key={index}>{item.username}</h1>
        ))}
        </div>
    )
};

export default Profile;