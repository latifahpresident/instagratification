import React, { useState, useEffect } from "react";
import PostCard from "./../../components/PostCard/PostCard";

const Posts = (props) => {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    console.log("LIKES FROM POST", likes)

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
    //     setLikes(likes)
    // }, [likes])


   
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