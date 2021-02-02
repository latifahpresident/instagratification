import styled from "styled-components";
import { grayBorder } from "./../../global-styles/global.styles";

export const PostCardWrapper = styled.article`
    /* border: 1px solid ${grayBorder}; */
    display: flex;
    flex-direction: column;
    margin-bottom: .7rem;
`;

export const PostCardHeader = styled.header`
    display: flex;
    /* border: 1px solid orange; */
    justify-content: space-between;
    align-items: center;
`;

export const PostCardUserInfo = styled.div`
    display: flex;
    /* border: 1px solid red; */
    width: ${props => props.comment ? `auto` : `55%`};
    h1 {
        margin-top: 1.5rem;
        font-size: .75rem;
        margin-left: .5rem;
        font-weight: 600;
    }
    .avatar {
        height: 31px;
        width: 31x;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0 .65rem .7rem;
        height: 30px;
        width: 30px;
    }
    .icon {
        padding-bottom: .2rem;
        padding-right: .09rem;
    }
`;

export const PostCardImage = styled.div`
     display: flex;
  justify-content: center;
  align-items: center; 

  img {
      width: 100%;
      height: 372px;
      min-height: 372px;
  }
`;

export const PostCardIconWrapper = styled.div`
    /* border: 1px solid orange; */
    display: flex;
    justify-content: space-between;
    padding: 0 .5rem;
    /* margin-top: 1rem; */
    .left {
        width: 30%;
        display: flex;
        justify-content: space-between;
        /* border: 1px solid green; */
    }
    .right {
        width: 25%;
    }
`;

export const PostCardContent = styled.div`
    padding: 0 .8rem;

    .caption {
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        width: 100%;
        /* margin-top: 1rem; */
    }
`;

export const PostCardCommentWrapper = styled.div`
    display: flex;
    align-items: center;
`;

