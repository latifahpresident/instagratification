import React from 'react';
import {NavLink } from 'react-router-dom'
import { NavItem } from './NavigationItem.styles';

const NavigationItem = (props) => {
    return (
        <NavItem>
            <NavLink
                className='nav-link'
                to={props.link}
                exact={props.exact}
            >{props.children}</NavLink>
        </NavItem>
    )
};

export default NavigationItem;