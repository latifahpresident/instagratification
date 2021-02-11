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
        profile_url:'https://instagram.fmia1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/66808171_446550755931355_5610596339466371072_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net&_nc_ohc=7aajzQpxRikAX-GynIU&tp=1&oh=d79681b8fc0f37404db7cd459fc85634&oe=5FFB25E0',
        username: 'ebonyzombi'
    },
    {
        firebase_id: '24i23jnfknhjlaedjewfj',
        profile_url: 'https://instagram.fmia1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101446034_943837059385462_2986636875143315456_n.jpg?_nc_ht=instagram.fmia1-1.fna.fbcdn.net&_nc_ohc=zrcUE9h3ieAAX-Uz2bF&tp=1&oh=c73f152dbdf74856656955a6df7d54a6&oe=601B8D3D',
        username: 'qween_neek'
    },
    {
        firebase_id: '24i23jnfknhjladhjwnbfalw',
        profile_url:'https://instagram.fmia1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/66808171_446550755931355_5610596339466371072_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net&_nc_ohc=7aajzQpxRikAX-GynIU&tp=1&oh=d79681b8fc0f37404db7cd459fc85634&oe=5FFB25E0',
        username: 'ebonyzombi'
    },
    {
        firebase_id: '24i23jnfknhjlaawnfjf',
        profile_url:'https://instagram.fmia1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/66808171_446550755931355_5610596339466371072_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net&_nc_ohc=7aajzQpxRikAX-GynIU&tp=1&oh=d79681b8fc0f37404db7cd459fc85634&oe=5FFB25E0',
        username: 'ebonyzombi'
    },
    {
        firebase_id: '24i23jnfknhjlaawnfjf',
        profile_url:'https://instagram.fmia1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/66808171_446550755931355_5610596339466371072_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net&_nc_ohc=7aajzQpxRikAX-GynIU&tp=1&oh=d79681b8fc0f37404db7cd459fc85634&oe=5FFB25E0',
        username: 'ebonyzombi'
    },
   
]

const Feed = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        console.log("in usee effect feed")
        dispatch(getUsers())
        // dispatch(getPosts())

        return () => {
            console.log("unsubscribe ");
          };
    }, [dispatch]);

    // console.log("POSTATE from feed", postState)
    console.log("usersTATE from feed", posts)

    return (
        <React.Fragment>
            <Followers followers={followersData}/>
            <Posts posts={posts}/>
        </React.Fragment>
    )
};

export default Feed;