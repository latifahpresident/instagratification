import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from './../Logo/Logo';
import { Navigation } from './NavigationItems.styles';
import Button from './../UI/Buttons/Button';

const NavigationItems = (props) => {
    console.log("navigation props", props)
    return (
        <Navigation>
            <ul>
                <NavigationItem link='/' exact ><Logo/></NavigationItem>
                <div className='navigation-links'>
                    <Button
                        type='submit'
                        className='primary'
                        text='Log In'
                    />
                    <NavigationItem className='signup-link' link='/signup' exact>SignUp</NavigationItem>
                </div>
            </ul>
        </Navigation>
    )
};

export default NavigationItems;