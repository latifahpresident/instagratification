import React from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./../../components/Profile/Profile";

const Profile = () => {
    const user = useSelector(state => state.user.users);
    const loading = useSelector(state => state.user.loading)
    const posts = useSelector(state => state.user.posts);
    const followers = useSelector(state => state.user.followers);
console.log("posts from profile", posts.length)
console.log("followers from profile", followers)

    return (
        <div >
            { user.map((item, index)=> (
            <ProfileComponent
                key={index}
                user={item}
                posts={posts}
                followers={followers}
            />
        ))}
        </div>
    )
};

export default Profile;