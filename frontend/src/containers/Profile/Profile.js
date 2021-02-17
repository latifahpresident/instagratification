import React, { useState, useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import ProfileComponent from "./../../components/Profile/Profile";
import Modal from "../../components/UI/Modal/Modal";
import CreateMenu from "../../components/Menus/CreatPostMenu";
import { getUsersById } from "../../store/actions/user";

const Profile = () => {
    const user = useSelector(state => state.user.users);
    const id = useSelector(state => state.user.firebase_id)
    const posts = useSelector(state => state.user.posts);
    const followers = useSelector(state => state.user.followers);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()

    const modalHandler = () => {
        setShowModal(!showModal)
    };

    useEffect(() => {
        dispatch(getUsersById(id));
        return () => {
            console.log("unsubscribe")
        }
    }, [dispatch])

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