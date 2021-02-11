import React from 'react';
import ProfileHeader from './Header/Header';

const Profile = (props) => {
    const { user, } = props;
    return (
        <div>
            <ProfileHeader user={user}/>
        </div>
    )
};

export default Profile;
