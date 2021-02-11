import React from "react";
import { Avatar, IconButton, } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faComment,  faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {ButtonIcon, SmallParagraph, likedColor} from "./../../global-styles/global.styles";
import { PostCardWrapper, PostCardHeader, PostCardUserInfo, PostCardImage, PostCardIconWrapper, PostCardContent, PostCardCommentWrapper,  } from "./PostCard.styles";
import Input from './../../containers/Forms/Comment';


const PostCard = (props) => {
    const { post, handleLikeUnlike, liked } = props
   console.log("like from post card", props)
    return (
        
        <PostCardWrapper>
            <PostCardHeader>
                <PostCardUserInfo >
                    <Avatar className="avatar" username={post.username} src={post.profile_url} />
                    <h1>{post.username}</h1>
             </PostCardUserInfo>
             <IconButton style={{padding: 0, marginRight: `.5rem`, marginTop: `.2rem`,}}>
                 <MoreHorizIcon className="icon"/>
             </IconButton>
            </PostCardHeader>
            <PostCardImage>
                <img src={post.image_url} alt={post.username}/>
            </PostCardImage>
            <PostCardIconWrapper>
                <div className="left">
                    <ButtonIcon onClick={() => handleLikeUnlike({id: post.id, image_url: post.image_url, likes: post.likes})}>
                        <FontAwesomeIcon icon={faHeart} className="icon, heart" size="lg" style={{color: liked ? `${likedColor}`: null}}/>


                    </ButtonIcon>
                    <ButtonIcon>
                        <FontAwesomeIcon icon={faComment} className="icon" size="2x"/>
                    </ButtonIcon>
                    <ButtonIcon>
                        <FontAwesomeIcon icon={faPaperPlane} className="icon" size="2x"/>
                    </ButtonIcon>
                </div>
                <div className="rigth">
                    <ButtonIcon>
                        <FontAwesomeIcon icon={faBookmark} className="icon" size="2x"/>
                    </ButtonIcon>
                </div>
            </PostCardIconWrapper>
            <PostCardContent>
                <SmallParagraph bold >{post.likes} {post.likes === 1 ? `like` : `likes`}</SmallParagraph>
                <div className="caption">
                    <SmallParagraph bold nomargin style={{marginRight: `.5rem`}}>{post.username}</SmallParagraph>
                    <SmallParagraph  nomargin>{post.caption}</SmallParagraph>

                </div>
            </PostCardContent>
            <PostCardCommentWrapper>
            <PostCardUserInfo comment>
                    <Avatar className="avatar" username={post.username} src={post.profile_url} />
             </PostCardUserInfo>                <Input/>
            </PostCardCommentWrapper>
        </PostCardWrapper>
    )
};

export default PostCard;