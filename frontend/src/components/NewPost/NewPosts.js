import React from 'react';
import { NewPostWrapper,  NewPostNavigation } from '../../containers/Posts/NewPost/NewPost.styles';

const NewPost = (props) => {
    const { cancel } = props;
    return (
        <NewPostWrapper>
        <NewPostNavigation>
            <ButtonComponent 
                className={`white`}
                text={`Cancel`}
                size={`lg`}
                handleClick={cancel}
            />
        </NewPostNavigation>
    </NewPostWrapper>
    )
};

export default NewPost;