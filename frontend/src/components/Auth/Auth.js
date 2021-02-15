import React from 'react';
import { withRouter } from 'react-router-dom';
import { AuthWrapper, AuthFormWrapper, AuthFormHeading, AuthFormInputs, AuthFormLogin} from './Auth.styles';
import Logo from './../Logo/Logo';
import Button from '../UI/Buttons/Button';
import { SmallParagraph } from '../../global-styles/global.styles';

const Auth = (props) => {
    const pathname = props.location.pathname;
    return (
        <AuthWrapper>
            <AuthFormWrapper>
                <div className='top'>
                    <Logo/>
                    <AuthFormHeading className='bold'> {pathname === '/signin' ? `Sign in`  : pathname === '/signup' ? `Sign up` : null} to see photos and videos <br/> from your friends.</AuthFormHeading>
                    <Button 
                        className='primary' 
                        type='submit'
                        // text={` Log in with Facebook` }
                        size='lg'
                        text={'Log in with Facebook' }
                    />

                    <div className='orSection'>
                        <div className='line'></div>
                        <p>OR</p>
                        <div className='line'></div>

                    </div>
                </div>
               <AuthFormInputs>
                {props.children}
               </AuthFormInputs>
               <AuthFormLogin>
                   <SmallParagraph> {pathname === '/signin' ? `Don't have an account?`  : pathname === '/signup' ? `Have an account?` : null} 
                   { pathname === '/signin' ?  <a href="/signup">Sign up</a> : <a href="signin">Log in</a>}
                   {/* <a href={pathname === '/signin' ? `/signup`  : 
                   pathname === '/signup' ? `/signin` : null}>
                       {pathname === '/signin' ? `Sign up`  : pathname === '/signup' ? `Log in` : null}</a> */}
                    </SmallParagraph>
               </AuthFormLogin>
            </AuthFormWrapper>
        </AuthWrapper>
    )
};

export default withRouter(Auth);