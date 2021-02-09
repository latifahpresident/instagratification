import React from "react";
import {FooterNav, FooterLinks, FooterLink} from "./Footer.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import {useSelector} from "react-redux";

const Footer = () => {
    const id = useSelector(state => state.user.users)
    console.log("id", id)
    const linkData = [
        {
            icon: faHome,
            name: "home",
            route: `/`
        },
        {
            icon: faSearch,
            name: "search",
            route: `/search`
        },
        {
            icon: faPlayCircle,
            name: "reels",
            route: `/shop`
        },
        {
            icon: faShoppingBag,
            name: "shop",
            route: `/shop`
        },
        {
            icon: faUserCircle,
            name: "profile",
            route: `/${id}`
        },
    ]
    return (
        <FooterNav>
            <FooterLinks>
                {linkData.map(link => (
                    <FooterLink>
                    <a href={`${link.route}`}><FontAwesomeIcon icon={link.icon} className="icon"/></a>
                </FooterLink>
                ))}
                
            </FooterLinks>
        </FooterNav>
    )
};

export default Footer;