import React from 'react';
import { NewPostWrapper,  NewPostNavigation, NewPostHeader } from './NewPost.styles';
import LinkButton from './../UI/Buttons/LinkButton';
import NewPostImagePreview from './NewPostImagePreview';

const NewPost = (props) => {
    const { cancel, imagePreview, handleUpload } = props;
    console.log("new post comp imaage preview", imagePreview)
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
                text={`Post`}
                size={`lg`}
                handleClick={handleUpload}
            />
        </NewPostNavigation>
        <NewPostImagePreview imagePreview={imagePreview}/>
    </NewPostWrapper>
    )
};

export default NewPost;