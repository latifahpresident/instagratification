import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getUsers} from "./../../store/actions/user";

import Followers from '../../components/Followers/Followers';
import Posts from './../Posts/Posts';
const followersData = [
    {
        firebase_id: '24i23jnfknhjlawi8',
        profile_url:"https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/39017626_258253251488885_5780949491343425536_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=SmxB0OBIOqMAX_BYcJ_&tp=1&oh=16174a6c96ea22de703d74a40ac7cee9&oe=603F6FC2",
        username: 'Your profile'
    },
    {
        firebase_id: '24i23jnfknhjlawi8',
        profile_url:"https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/39017626_258253251488885_5780949491343425536_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=SmxB0OBIOqMAX_BYcJ_&tp=1&oh=16174a6c96ea22de703d74a40ac7cee9&oe=603F6FC2",
        username: 'ebonyzombi'
    },
    {
        firebase_id: '24i23jnfknhjlaedjewfj',
        profile_url:"https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/39017626_258253251488885_5780949491343425536_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=SmxB0OBIOqMAX_BYcJ_&tp=1&oh=16174a6c96ea22de703d74a40ac7cee9&oe=603F6FC2",
        username: 'qween_neek'
    },
    {
        firebase_id: '24i23jnfknhjladhjwnbfalw',
        profile_url:"https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/39017626_258253251488885_5780949491343425536_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=SmxB0OBIOqMAX_BYcJ_&tp=1&oh=16174a6c96ea22de703d74a40ac7cee9&oe=603F6FC2",
        username: 'ebonyzombi'
    },
    {
        firebase_id: '24i23jnfknhjlaawnfjf',
        profile_url:"https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/39017626_258253251488885_5780949491343425536_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=SmxB0OBIOqMAX_BYcJ_&tp=1&oh=16174a6c96ea22de703d74a40ac7cee9&oe=603F6FC2",
        username: 'ebonyzombi'
    },
    {
        firebase_id: '24i23jnfknhjlaawnfjf',
        profile_url:"https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/39017626_258253251488885_5780949491343425536_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=SmxB0OBIOqMAX_BYcJ_&tp=1&oh=16174a6c96ea22de703d74a40ac7cee9&oe=603F6FC2",
        username: 'ebonyzombi'
    },
   
]

const Feed = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(getUsers());
        return () => {
            console.log("unsubscribe ");
          };
    }, [dispatch]);
    return (
        <React.Fragment>
            <Followers followers={followersData}/>
            <Posts posts={posts}/>
        </React.Fragment>
    )
};

export default Feed;