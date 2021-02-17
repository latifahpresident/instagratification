import React from 'react';
import { NewPostImageUpload } from './NewPost.styles';

const ImagePreview = (props) => {

    return (
        <NewPostImageUpload>
            {props.imagePreview === null ? 
             <div className="placeholder">
                <img src="https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png" alt="placeholder"/>
            </div>  
            
            :   <img src={props.imagePreview} alt="preview"/> 

        }
           
        </NewPostImageUpload>
    )
};

export default ImagePreview;