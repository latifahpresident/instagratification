import React from 'react';
import { AuthWrapper, AuthFormWrapper, AuthFormHeading} from './Auth.styles';
import Logo from './../Logo/Logo';
import ButtonComponent from '../UI/Buttons/Button';

const Auth = (props) => {
    return (
        <AuthWrapper>
            <AuthFormWrapper>
                <div class='top'>
                    <Logo/>
                    <AuthFormHeading> Sign up to see photos and videos from your friends.</AuthFormHeading>
                    <ButtonComponent 
                        className='primary' 
                        type='submit'
                        text='Log in with Facebook'
                        size='lg'
                    />

                    <div className='orSection'>
                        <div className='line'></div>
                        <p>OR</p>
                        <div className='line'></div>

                    </div>
                </div>
               
                {props.children}
            </AuthFormWrapper>
        </AuthWrapper>
    )
};

export default Auth;