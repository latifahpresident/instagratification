import React from 'react';
import {withRouter} from 'react-router-dom';
import Aux from './../Aux/Aux';
import Navigation from './../../../components/Navigation/NavigationItems';
import Footer from './../../../components/Footer/Footer';
import {MainWrapper} from './../../../global-styles/global.styles';

const Layout = (props) => {
    return (
        <Aux>
            {props.location.pathname === '/signup' || props.location.pathname  ===  '/signin'  ? null : <Navigation/> }
            
             <MainWrapper >
                {props.children}
            </MainWrapper>
            {props.location.pathname === '/signup' || props.location.pathname === '/signin' ? null : <Footer/> }
        </Aux>

    )
};

export default withRouter(Layout);