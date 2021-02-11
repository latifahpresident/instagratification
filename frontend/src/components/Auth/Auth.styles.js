import styled from 'styled-components';
import {darkGrayColor, primaryBlue} from './../../global-styles/global.styles';

export const AuthWrapper = styled.section`
    /* border: 1px solid green; */
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const AuthFormWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2rem;

    .top {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        /* border: 1px solid red; */
        height: 250px;
        margin-bottom: 2rem;
    }

    .orSection {
        /* border: 1px solid red; */
        display: flex;
        align-items: flex-end;
        width: 100%;
        justify-content: center;
        color: ${darkGrayColor};
        margin-top: 2rem;
    }

p {
    font-weight: 700;
    font-size: .8rem;
}
.bold {
        font-size: .9rem;
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
    font-size: 2rem;
    font-weight: 800;
    color: ${darkGrayColor};
    text-align: center;
    /* border: 1px solid green; */
    width: 80%;
    line-height: 1.5;
    margin-top: 2rem;
`;

export const AuthFormInputs = styled.div`
    /* border: 1px solid hotpink; */
    align-self: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 250px;
`;

export const AuthFormLogin = styled.div`
    /* border: 1px solid teal; */
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;
    margin-top: 1rem;
    a {
        color: ${primaryBlue};
        margin-left: .5rem;
        text-decoration: none;
    }
`;