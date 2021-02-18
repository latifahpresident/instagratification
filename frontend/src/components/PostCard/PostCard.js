import React from "react";
import { useSelector } from 'react-redux'
import { Avatar, IconButton, } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faComment,  faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Skeleton from '@material-ui/lab/Skeleton';
import {ButtonIcon, SmallParagraph, likedColor} from "./../../global-styles/global.styles";
import { PostCardWrapper, PostCardHeader, PostCardUserInfo, PostCardImage, PostCardIconWrapper, PostCardContent, PostCardCommentWrapper,  } from "./PostCard.styles";
import Input from './../../containers/Forms/Comment';


const PostCard = (props) => {
    const { post, handleLikeUnlike, liked, form, handleSubmit } = props;
    const loading = useSelector(state => state.posts.loading);
    return (
        <PostCardWrapper>
            <PostCardHeader>
                <PostCardUserInfo >
                    {loading ? <Skeleton animation="wave" variant="circle" height={45} width={45}/> :                     <Avatar className="avatar" username={post.username} src={post.profile_url} />}
                    <h1>{post.username}</h1>
             </PostCardUserInfo>
             <IconButton style={{padding: 0, marginRight: `.5rem`, marginTop: `.2rem`,}}>
                 <MoreHorizIcon className="icon"/>
             </IconButton>
            </PostCardHeader>
            <PostCardImage>
                    {loading ? <Skeleton animation="wave" variant="rect" height={372} width={372} /> :
                     <img src={post.image_url} alt={post.username}/>}
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
                    {!post.caption ? null : <SmallParagraph bold nomargin style={{marginRight: `.5rem`}}>{post.username}</SmallParagraph> }
                    <SmallParagraph  nomargin>{post.caption}</SmallParagraph>

                </div>
            </PostCardContent>
            <PostCardCommentWrapper>
            <PostCardUserInfo comment>
                    <Avatar className="avatar" username={post.username} src={post.profile_url} />
             </PostCardUserInfo>                
             {/* <Input/> */}
             <form onSubmit={handleSubmit} style={{width: `85%`}}>
                {form}
             </form>
       
            </PostCardCommentWrapper>
        </PostCardWrapper>
    )
};

export default PostCard;