import React, { useState } from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./../../components/Profile/Profile";
import Modal from "../../components/UI/Modal/Modal";
import CreateMenu from "../../components/Menus/CreatPostMenu";

const Profile = () => {
    const user = useSelector(state => state.user.users);
    const posts = useSelector(state => state.user.posts);
    const followers = useSelector(state => state.user.followers);
    const [showModal, setShowModal] = useState(false);

    const modalHandler = () => {
        setShowModal(!showModal)
    };


    return (
        <div>
            <Modal showModal={showModal} modalHandler={modalHandler}>
              <CreateMenu/>
            </Modal>
            { user.map((item, index)=> (
            <ProfileComponent
                key={index}
                user={item}
                posts={posts}
                followers={followers}
                modalHandler={modalHandler}
            />
        ))}
        </div>
    )
};

export default Profile;