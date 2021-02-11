import React from 'react';
import InstaLogo from './../../assets/images/instagram-login-logo.png';
import { LogoContainer } from './Logo.styles';

const Logo = () => {
    return (
        <LogoContainer>
            <img src={InstaLogo} alt="insta logo"/>
        </LogoContainer>
    )
};

export default Logo;