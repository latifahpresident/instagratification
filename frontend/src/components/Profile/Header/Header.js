import React from 'react';
import { HeaderContent, HeaderNavigation, HeaderWrapper } from './Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBars, faChevronDown, } from '@fortawesome/free-solid-svg-icons';

const  ProfileHeader = (props) => {
    const { user, } = props;

    return (
        <HeaderWrapper>
            <HeaderNavigation>
                <h1 className='username'>{user.username} <FontAwesomeIcon icon={faChevronDown} size={'xs'} className='chevDown'/></h1>
                <div className='icons'>
                    <FontAwesomeIcon icon={faPlus} size={'lg'} className='icon'/>
                    <FontAwesomeIcon icon={faBars} size={'lg'} className='icon'/>
                </div>
            </HeaderNavigation>
            <HeaderContent>

            </HeaderContent>
        </HeaderWrapper>
    )
};

export default ProfileHeader;