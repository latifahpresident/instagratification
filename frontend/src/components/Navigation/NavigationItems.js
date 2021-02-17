import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { signOut } from '../../store/actions/user';
import { useSelector } from 'react-redux';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from './../Logo/Logo';
import { Navigation } from './NavigationItems.styles';
import Button from './../UI/Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

const NavigationItems = (props) => {
    const loggedIn = useSelector(state => state.user.loggedIn);
    const dispatch = useDispatch();
    
    const handleSignOut = () => {
        if (loggedIn === true ) {
            dispatch(signOut());
            props.history.push('/');
        } else if (loggedIn === false) {
            props.history.push('/signin');
        }
           
    };

    return (
        <Navigation>
            <ul>
                <NavigationItem link='/' exact ><Logo/></NavigationItem>
                <div className='navigation-links'>
                    {!loggedIn ? 
 <React.Fragment>
 <Button
 type='submit'
 className='primary'
 text={loggedIn ? `Log Out` : `Log In`}
 handleClick={handleSignOut}

/>              
<NavigationItem marginleft className='signup-link' link='/signup' exact>SignUp</NavigationItem>
</React.Fragment>
                 
         : 
         <React.Fragment>
         <FontAwesomeIcon icon={faPlus}/>   
         <FontAwesomeIcon icon={faHeart}/> 
         <FontAwesomeIcon icon={faPaperPlane}/>    

</React.Fragment>
      }
                   
                </div>
            </ul>
        </Navigation>
    )
};

export default withRouter(NavigationItems);