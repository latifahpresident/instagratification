import styled from "styled-components";
import { grayBorder } from "./../../global-styles/global.styles";

export const PostCardWrapper = styled.article`
    border: 1px solid ${grayBorder};
    display: flex;
    flex-direction: column;
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
    width: 25%;
    h1 {
        font-size: 1rem;
        margin-top: 1.3rem;
        font-size: .8rem;
        margin-left: .5rem;
        font-weight: 600;
    }
    .avatar {
        height: 31px;
      width: 31x;
      display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 1rem .7rem;
    height: 30px;
    width: 30px;
    /* margin-bottom: 1rem;
    margin-top: 1rem;
    margin-left: .7rem; */
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
  }
`;

