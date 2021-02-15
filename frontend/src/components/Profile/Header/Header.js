import React from 'react';
import { withRouter } from 'react-router-dom';
import { HeaderContent, HeaderNavigation, HeaderWrapper, HeaderUserContent, HeaderFollowersContent } from './Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBars, faChevronDown, } from '@fortawesome/free-solid-svg-icons';
import BadgeAvatar from '../../Avatar/BadgeAvatar';
import { SmallParagraph } from '../../../global-styles/global.styles';
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../../store/actions/user';

const  ProfileHeader = (props) => {
    const followers = useSelector(state => state.user.followers);
    const posts = useSelector(state => state.user.posts);

    const { user} = props;
console.log("followers from header", followers)

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
        <HeaderWrapper>
            <HeaderNavigation>
                <h1 className='username'>{user.username} <FontAwesomeIcon icon={faChevronDown} size={'xs'} className='chevDown'/></h1>
                <div className='icons'>
                    <FontAwesomeIcon icon={faPlus} size={'lg'} className='icon'/>
                    <FontAwesomeIcon icon={faBars} size={'lg'} className='icon'/>
<button onClick={handleSignOut}>log out</button>
                </div>
            </HeaderNavigation>
            <HeaderContent>
                <HeaderUserContent>
                    <BadgeAvatar username={user.full_name} profile_url={user.profile_url}/>
                    <SmallParagraph bold>{user.full_name}</SmallParagraph>
                </HeaderUserContent>
                    
                <HeaderFollowersContent>
                    <p><span>{posts.length}</span> <br/> Posts </p>
                </HeaderFollowersContent>
                <HeaderFollowersContent>
                    
                    <p><span>{followers.length}</span> <br/> Followers </p>

                </HeaderFollowersContent>
                <HeaderFollowersContent>
                    
                    <p><span>8</span> <br/> Following </p>

                </HeaderFollowersContent>
                {/* <div>

                </div> */}
            </HeaderContent>
        </HeaderWrapper>
    )
};

export default withRouter(ProfileHeader);