import React from 'react';
import { NewPostWrapper,  NewPostNavigation, NewPostHeader } from './NewPost.styles';
import LinkButton from './../UI/Buttons/LinkButton';
import { primaryBlue } from '../../global-styles/global.styles';

const NewPost = (props) => {
    const { cancel } = props;
    return (
        <NewPostWrapper>
        <NewPostNavigation>
            <LinkButton
                className={`white`}
                text={`Cancel`}
                size={`lg`}
                handleClick={cancel}
            />
            <NewPostHeader>New Post</NewPostHeader>
            <LinkButton
                className={`white`}
                text={`Next`}
                size={`lg`}
                handleClick={cancel}
                style={{color: `${primaryBlue}`}}
            />
        </NewPostNavigation>
    </NewPostWrapper>
    )
};

export default NewPost;