import React from 'react';
import { useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { BadgeContainer } from './Avatar.styles';
import Skeleton from '@material-ui/lab/Skeleton';

const BadgeAvatar = (props) => {
    const loading = useSelector(state => state.user.loading)
    const { profile_url, username } = props;
   return (
    <BadgeContainer>
        {loading ?  <Skeleton variant="circle" width={67.5} height={67.5} /> :
        <Badge
        overlap="circle"
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
        }}
        badgeContent={
            <AddCircleIcon color="primary"/>
        }
    >
        <Avatar className="avatarImage" alt={`${username}'s profile image`} src={`${profile_url}`} />
    </Badge>
    }
    </BadgeContainer>
   )
};

export default BadgeAvatar;