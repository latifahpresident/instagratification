import React from 'react';
import ProfileHeader from './Header/Header';
import Grid from './Grid/Grid';

const Profile = (props) => {
    const { user, } = props;
    return (
        <div>
            <ProfileHeader user={user}/>
            <Grid/>
        </div>
    )
};

export default Profile;
