import React from "react";
import {FooterNav, FooterLinks, FooterLink} from "./Footer.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faUserCircle } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {

    const linkData = [
        {
            icon: faHome,
            name: "home"
        },
        {
            icon: faSearch,
            name: "search"
        },
        {
            icon: faPlayCircle,
            name: "reels"
        },
        {
            icon: faShoppingBag,
            name: "shop"
        },
        {
            icon: faUserCircle,
            name: "profile"
        },
    ]
    return (
        <FooterNav>
            <FooterLinks>
                {linkData.map(link => (
                    <FooterLink>
                    <a href={`/${link.name}`}><FontAwesomeIcon icon={link.icon} className="icon"/></a>
                </FooterLink>
                ))}
                
            </FooterLinks>
        </FooterNav>
    )
};

export default Footer;