import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewPostComponent from './../../../components/NewPost/NewPosts';

const NewPost = (props) => {
    const id = useSelector(state => state.user.firebase_id)
    const cancel = () => {
        props.history.push(`/profile/${id}`)
    };

    return (
        <React.Fragment>
            <NewPostComponent
                cancel={cancel}
            />
        </React.Fragment>
      
    )
};

export default withRouter(NewPost);