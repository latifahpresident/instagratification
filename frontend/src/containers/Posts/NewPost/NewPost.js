import React from 'react';
import { withRouter } from 'react-router-dom';
import ButtonComponent from '../../../components/UI/Buttons/Button';

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