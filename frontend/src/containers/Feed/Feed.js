import React from 'react';
import Followers from '../../components/Followers/Followers';

const followersData = [
    {
        firebase_id: '24i23jnfknalefn',
        profile_url:'https://instagram.fmia1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/125306036_192133465752889_8870647089674204414_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net&_nc_ohc=puMpbZVDuREAX8eobSb&tp=1&oh=7114134cb057d800b38a93a4fd808fa2&oe=5FFA9EBD',
        username: 'skijackson'
    },
    {
        firebase_id: '24i23jnfknhjlawi8',
        profile_url:'https://instagram.fmia1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/66808171_446550755931355_5610596339466371072_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net&_nc_ohc=7aajzQpxRikAX-GynIU&tp=1&oh=d79681b8fc0f37404db7cd459fc85634&oe=5FFB25E0',
        username: 'ebonyzombi'
    },
    {
        firebase_id: '24i23jnfknhjlaedjewfj',
        profile_url:'https://instagram.fmia1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/66808171_446550755931355_5610596339466371072_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net&_nc_ohc=7aajzQpxRikAX-GynIU&tp=1&oh=d79681b8fc0f37404db7cd459fc85634&oe=5FFB25E0',
        username: 'ebonyzombi'
    },
    {
        firebase_id: '24i23jnfknhjladhjwnbfalw',
        profile_url:'https://instagram.fmia1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/66808171_446550755931355_5610596339466371072_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net&_nc_ohc=7aajzQpxRikAX-GynIU&tp=1&oh=d79681b8fc0f37404db7cd459fc85634&oe=5FFB25E0',
        username: 'ebonyzombi'
    },
    {
        firebase_id: '24i23jnfknhjlaawnfjf',
        profile_url:'https://instagram.fmia1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/66808171_446550755931355_5610596339466371072_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net&_nc_ohc=7aajzQpxRikAX-GynIU&tp=1&oh=d79681b8fc0f37404db7cd459fc85634&oe=5FFB25E0',
        username: 'ebonyzombi'
    },
    {
        firebase_id: '24i23jnfknhjlaawnfjf',
        profile_url:'https://instagram.fmia1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/66808171_446550755931355_5610596339466371072_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net&_nc_ohc=7aajzQpxRikAX-GynIU&tp=1&oh=d79681b8fc0f37404db7cd459fc85634&oe=5FFB25E0',
        username: 'ebonyzombi'
    },
   
]
const Feed = () => {
    return (
        <Followers followers={followersData}/>
    )
};

export default Feed;