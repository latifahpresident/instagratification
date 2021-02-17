import React from 'react';
import ProfileHeader from './Header/Header';
import Grid from './Grid/Grid';

const Profile = (props) => {
    const { user, modalHandler} = props;
    return (
        <div>
            <ProfileHeader user={user} modalHandler={modalHandler}/>
            <Grid/>
        </div>
    )
};

export default Profile;
