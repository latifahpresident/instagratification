import styled from 'styled-components';
import {darkGrayColor} from './../../global-styles/global.styles';

export const MenuWrapper = styled.section`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    height: 350px;
`;

export const MenuHeader = styled.h1`
    font-size: 1rem;
    text-align: center;
`;

export const MenuItems = styled.ul`
    font-size: 1rem;
    text-align: center;
    list-style-type:none;
    padding: 0;
    /* border: 1px solid blue; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  

`;

export const MenuItem = styled.li`
    font-size: 1rem;
    text-align: center;
    /* border: 1px solid green; */
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70%;
   

    .icon {
        /* border: 1px solid red; */
        font-size: 1rem;
        width: 100%;
        display: flex;
        align-items: center;
    }
    .link {
        text-decoration: none;
        color: black;
        margin-left: 1.5rem;
        text-align: justify;
        font-size: 1.3rem;

    }
   .divider {
    border: .5px solid ${darkGrayColor};
    width: 130%;
    margin-left: 3rem;
   }
`;