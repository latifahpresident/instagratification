import React from 'react';
import {withRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Aux from './../Aux/Aux';
import Navigation from './../../../components/Navigation/NavigationItems';
import Footer from './../../../components/Footer/Footer';
import {MainWrapper} from './../../../global-styles/global.styles';

const Layout = (props) => {
    const id = useSelector(state => state.user.firebase_id)
    return (
        <Aux>
            {props.location.pathname === '/signup' || props.location.pathname  ===  '/signin' || props.location.pathname  ===  `/profile/${id}` ? null : <Navigation/> }
            
             <MainWrapper >
                {props.children}
            </MainWrapper>
            {props.location.pathname === '/signup' || props.location.pathname === '/signin' ? null : <Footer/> }
        </Aux>

    )
};

export default withRouter(Layout);