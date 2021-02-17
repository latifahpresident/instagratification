import styled from 'styled-components';

export const NewPostWrapper = styled.section`
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
`;

export const NewPostNavigation = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: white;
`;

export const NewPostHeader = styled.h1`
    color: white;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    /* border: 1px solid white; */
    padding-top: .2rem;
`;

export const NewPostImageUpload = styled.article`
    /* border: 1px solid blue; */
    width: 400px;
    height: 400px;
    max-width: 400px;
    max-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-top: 1.5rem;
 

  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img{
      height: 100%;
      width: 100%;
  }
`;