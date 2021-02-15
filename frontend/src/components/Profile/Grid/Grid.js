import React from 'react';
import { useSelector } from 'react-redux';
import { GridImage, GridWrapper } from './Grid.styles';
import Skeleton from '@material-ui/lab/Skeleton';

const Grid = () => {
    const posts = useSelector(state => state.user.posts);
    const loading = useSelector(state => state.user.loading)
    return (
        <GridWrapper>
            {posts.map(post => (
                 <GridImage>
                     { loading ? <Skeleton variant="rect" width={120} height={120} /> : 
                     <img src={post.image_url} alt={post.caption}/> }
                     
                 </GridImage>
            ))}
           
        </GridWrapper>
    )
};

export default Grid;