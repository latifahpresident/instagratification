import styled from "styled-components";

export const FooterNav = styled.nav`
    height: 54px;
    width: 100%;
    border: 1px solid green;
    position: fixed;
    bottom: 0;
    z-index: 2;
    background-color: white;
`;

export const FooterLinks = styled.ul`
    border: 1px solid red;
    display: flex;
    height: 54px;
    margin: 0;
    padding: 0;
`;

export const FooterLink = styled.li`
    border: 1px solid orange;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .icon {
        font-size: 1.5rem;
        color: rgb(93 86 86);

    }
`;