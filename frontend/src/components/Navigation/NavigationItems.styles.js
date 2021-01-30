import styled from 'styled-components';

export const Navigation = styled.nav`
    width: 100%;
    box-sizing: border-box;
    /* border: 1px solid #DBDBDB; */
    height: 55px;
    display: flex;
    align-items: center;
    ul {
        /* border: 1px solid red; */
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        height: auto;
        margin-top: 0;
    }

    .navigation-links {
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-between;
        margin-top: .3rem;
        width: 36.6%;
        margin-right: .6rem;
        height: auto;
        display: flex;
        align-items: center;
        height: 50px;
    }
   
   .signup-link {
    border: 1px solid green;
   }
`;