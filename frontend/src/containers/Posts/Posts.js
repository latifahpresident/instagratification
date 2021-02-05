import React, { useState, useEffect } from "react";
import PostCard from "./../../components/PostCard/PostCard";
import {useSelector, useDispatch} from "react-redux";
import {getPosts} from "./../../store/actions/posts";

const Posts = (props) => {
    const dispatch = useDispatch();
    const postsData = useSelector(state => state.posts.posts);
    const loading = useSelector(state => state.posts.loading);

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    console.log("LOADING", loading)
    console.log("POSTDATA FROM POSTS", postsData)

    const handleLikeUnlike = () => {
        console.log("CLICKED")
        if (!liked) {
            setLiked(true)
            setLikes(likes + 1)
            
        } else if(liked) {
            const newLikes = likes -1 
            setLikes(newLikes)
            setLiked(false)
        }

        
    }

    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [dispatch])


   
    const { posts } = props
// console.log("props from posts.js", posts)
    return (
        <React.Fragment>
            {/* <PostCard
                post={ posts }
                handleLikeUnlike={handleLikeUnlike}
                likes={likes}
                liked={liked}
              /> */}
            {loading ? "loading" : posts.map(post => (
                // console.log("posts from map", post),
              <PostCard
                post={ post }
                handleLikeUnlike={handleLikeUnlike}
                likes={likes}
                liked={liked}
              />
        ))}
       </React.Fragment> 
    )
};

export default Posts;