import React, { useState, useEffect } from "react";
import PostCard from "./../../components/PostCard/PostCard";
import {useSelector, useDispatch} from "react-redux";
import {updatePosts, getPosts} from "./../../store/actions/posts";

const Posts = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const loading = useSelector(state => state.posts.loading);

    const [newLikes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    console.log("new likes", newLikes)
    // console.log("POSTDATA FROM POSTS", postsData)

    const updatePost = (updates) =>{
        console.log("THIS POST IS UPDATING")

        dispatch(updatePosts(updates))
    };

    const handleLikeUnlike = (updates) => {
        console.log("CLICKED", updates.likes)
        if (!liked) {
            setLiked(true)
            setLikes(updates.likes + 1)
            updatePost({id: updates.id, image_url: updates.image_url, likes: updates.likes+1})

        } else if(liked) {
            const decLikes = updates.likes -1 
            setLikes(decLikes)
            setLiked(false)
            updatePost({id: updates.id, image_url: updates.image_url, likes: updates.likes-1})

        }
    };

  
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, liked])


   
    // const { posts } = props
// console.log("props from posts.js", posts)
console.log("likes", newLikes)
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
                likes={newLikes}
                liked={liked}
                updatePost={updatePosts}
              />
        ))}
       </React.Fragment> 
    )
};

export default Posts;