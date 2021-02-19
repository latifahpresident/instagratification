import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Input from './../../../components/UI/Input/Input';
import NewPostComponent from './../../../components/NewPost/NewPosts';
import ImageUploadInput from './ImageUpload';
import { storage } from './../../../shared/firebaseConfig';
import { newPost, } from './../../../store/actions/posts';
import { checkValidity } from './../../../shared/utilities';

const NewPost = (props) => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.user.firebase_id);
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState(null);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [state, setState] = useState(
        {
            controls: {
               
                caption: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Write a caption'
                    },
                    value: '',
                    validation: {
                        required: false
                    },
                    valid: false,
                    touched: false,
                },
               
            
        }
        });

    const cancel = () => {
        props.history.push(`/profile/${id}`)
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            snapshot => {},
            error => {
                //TODO: ADD ERROR BOUNDRY
                console.log(error);
            }, 
            () => {
                storage.ref('images').child(image.name).getDownloadURL()
                .then(url => {
                    if (url) {
                        const newpost = {
                            firebase_id: id,
                            image_url: url,
                            caption: state.controls.caption.value,
                        }
                        dispatch(newPost(newpost));
                        props.history.push(`/`);
                        
                    }
                })
            }
        ) 
    };

    const inputChangeHandler = (event, controlName) => {
        const updatedControls = { 
            ...state.controls
        }
        const updatedFormElement = { 
            ...updatedControls[controlName]
        }
        updatedFormElement.value = event.target.value; 
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation) 
        updatedFormElement.touched = true;
        updatedControls[controlName] = updatedFormElement 
        setState({controls: updatedControls})
    };

    const formElementsArray = [];
    for (let key in state.controls) {
        formElementsArray.push({
            id: key,
            config: state.controls[key]
        })
    }

    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            error={error}
            changed={ (event) => inputChangeHandler(event, formElement.id)}
        />
    ));

      
    return (
        <React.Fragment>
            <NewPostComponent
                cancel={cancel}
                imagePreview={imagePreview}
                handleUpload={handleUpload}
            />
          <form   style={{width: `98%`}}
>
                <ImageUploadInput setImage={setImage} setImagePreview={setImagePreview} />
               {form}
            </form> 
        </React.Fragment>
      
    )
};

export default withRouter(NewPost);