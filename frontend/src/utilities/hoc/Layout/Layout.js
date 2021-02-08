import React from 'react';
import Aux from './../Aux/Aux';
import Navigation from './../../../components/Navigation/NavigationItems';
import Footer from './../../../components/Footer/Footer';
import {MainWrapper} from './../../../global-styles/global.styles';

const Layout = (props) => {
    return (
        <Aux>
            <Navigation/> 
             <MainWrapper >
                {props.children}
            </MainWrapper>
            <Footer/>
        </Aux>

    )
};

export default Layout;