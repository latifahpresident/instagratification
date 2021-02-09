import styled from 'styled-components';
import {darkGrayColor} from './../../global-styles/global.styles';

export const AuthWrapper = styled.section`
    border: 1px solid green;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const AuthFormWrapper = styled.div`
    border: 1px solid;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    .top {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        border: 1px solid red;
        height: 250px;
    }

    .orSection {
        border: 1px solid red;
        display: flex;
        align-items: flex-end;
        width: 100%;
        justify-content: center;
        color: ${darkGrayColor};
    }

p {
    font-weight: 700;
    font-size: .8rem;
}
    .line {
        width: 150px;
        height: 1px;
        background-color: ${darkGrayColor};
        align-self: center;
        margin: 0 1rem;
    }
`;

export const AuthFormHeading = styled.p`
    font-size: 1rem;
    font-weight: 800;
    color: ${darkGrayColor};
    text-align: justify;
    border: 1px solid green;
    width: 80%;
    line-height: 1.5;
`;