import React from 'react';
import Avatar from './../Avatar/Avatar'
import { FollowersSection, FollowersList, FollowesListItem, } from './Followers.styles';

const Followers = (props) => {
    const { followers } = props
    return (
        <FollowersSection>
            <FollowersList>
                {followers.map(follower => (
                     <FollowesListItem key={follower.firebase_id}>
                    <Avatar username={follower.username} profile_url={follower.profile_url} size="large"/>
                     <p className="avatarUsername">{  follower.username }</p>
                 </FollowesListItem>
                ))}
               
            </FollowersList>
        </FollowersSection>
    )
};

export default Followers;