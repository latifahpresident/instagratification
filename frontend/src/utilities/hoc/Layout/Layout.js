import React from 'react';
import {withRouter} from 'react-router-dom';
import Aux from './../Aux/Aux';
import Navigation from './../../../components/Navigation/NavigationItems';
import Footer from './../../../components/Footer/Footer';
import {MainWrapper} from './../../../global-styles/global.styles';

const Layout = (props) => {
    console.log("props.match.url ", props )
    return (
        <Aux>
            {props.location.pathname === '/signup' ? null : <Navigation/> }
            
             <MainWrapper >
                {props.children}
            </MainWrapper>
            <Footer/>
        </Aux>

    )
};

export default withRouter(Layout);