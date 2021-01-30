import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { AvatarContainer } from './Avatar.styles';

const AvatarWrapper = (props) => {
    const { username, profile_url,  } = props;
    return (
        <AvatarContainer background>
            <Avatar className="avatarImage" alt={`${username}'s profile image`} src={profile_url} />
         </AvatarContainer>
    )
};

export default AvatarWrapper