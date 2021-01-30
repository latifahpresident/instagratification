import React, { useState, } from "react";
import PostCard from "./../../components/PostCard/PostCard";

const Posts = (props) => {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLikeUnlike = () => {
        if (!liked) {
            setLikes(likes + 1)
            setLiked(true)
        } else {
            setLikes(likes - 1)
            setLikes(false)
        }
    }
    const { posts } = props
    return (
        <React.Fragment>
            {posts.map(post => (
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