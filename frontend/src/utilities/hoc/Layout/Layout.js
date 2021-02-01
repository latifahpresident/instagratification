import React from 'react';
import Aux from './../Aux/Aux';
import Navigation from './../../../components/Navigation/NavigationItems';
import {MainWrapper} from './../../../global-styles/global.styles';

const Layout = (props) => {
    return (
        <Aux>
            <Navigation/> 
             <MainWrapper >
                {props.children}
            </MainWrapper>
        </Aux>

    )
};

export default Layout;