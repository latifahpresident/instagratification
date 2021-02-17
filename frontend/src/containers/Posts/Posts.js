import React, { useState, useEffect } from "react";
import PostCard from "./../../components/PostCard/PostCard";
import {useSelector, useDispatch} from "react-redux";
import {updatePosts, getPosts, } from "./../../store/actions/posts";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const successMsg = useSelector(state => state.posts.successMsg);

    const [newLikes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const updatePost = (updates) =>{
        dispatch(updatePosts(updates))
    };

    const handleLikeUnlike = (updates) => {
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
    }, [dispatch, liked, successMsg]);

    return (
        <React.Fragment>
            {posts.map(post => (
              <PostCard
                key={post.id}
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