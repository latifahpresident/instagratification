import React from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./../../components/Profile/Profile";

const Profile = () => {
    const user = useSelector(state => state.user.users);
    const loading = useSelector(state => state.user.loading)
    const posts = useSelector(state => state.user.posts);
    const followers = useSelector(state => state.user.followers);

    return (
        <div >
            { loading ? `loading` : user.map((item, index)=> (
            <ProfileComponent
                user={item}
            />
        ))}
        </div>
    )
};

export default Profile;