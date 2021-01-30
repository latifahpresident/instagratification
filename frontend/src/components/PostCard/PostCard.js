import React from "react";
import { Avatar, IconButton, } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { PostCardWrapper, PostCardHeader, PostCardUserInfo, PostCardImage } from "./PostCard.styles";

const PostCard = (props) => {
    const { post, handleLikeUnlike, likes, liked } = props
   console.log("post", post)
    return (
        <PostCardWrapper>
            <PostCardHeader>
                <PostCardUserInfo >
                    <Avatar className="avatar" username={post.username} src={post.profile_url} />
                    <h1>{post.username}</h1>
             </PostCardUserInfo>
             <IconButton style={{padding: 0}}>
                 <MoreHorizIcon className="icon"/>
             </IconButton>
            </PostCardHeader>
            <PostCardImage>
                <img src={post.post_image} alt={post.username}/>
            </PostCardImage>
        </PostCardWrapper>
    )
};

export default PostCard;