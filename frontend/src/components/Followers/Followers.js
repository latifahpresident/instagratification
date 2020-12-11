import React from 'react';
import { FollowersSection, FollowersList, FollowesListItem, AvatarContainer } from './Followers.styles';
import Avatar from '@material-ui/core/Avatar';

const Followers = (props) => {
    const { followers } = props
    return (
        <FollowersSection>
            <FollowersList>
                {/*TODO: MAP OVER LIST OF FOLLOWERS AND PROVIDE DATA AS PROPS */}
                {followers.map(follower => (
                     <FollowesListItem key={follower.firebase_id}>
                     <AvatarContainer>
                         <Avatar className="avatarImage" alt={`${follower.username}'s profile image`} src={follower.profile_url} />
                     </AvatarContainer>
                     <p className="avatarUsername">{  follower.username}</p>

                 </FollowesListItem>
                ))}
               
            </FollowersList>
        </FollowersSection>
    )
};

export default Followers;