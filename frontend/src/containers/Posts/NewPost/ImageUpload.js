import React, { useState } from 'react';
import Input from './../../../components/UI/Input/Input';
import { checkValidity } from './../../../utilities/utilities';

const ImageUpload = (props) => {
    const { setImagePreview, setImage } = props;
    const [error, setError] = useState(false);

    const [state, setState] = useState(
        {
            controls: {
                image_upload: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'file',
                        // placeholder: 'Email'
                    },
                    value: '',
                    name: '',
                    validation: {
                        required: true,
                        minLength: 3,
                    },
                    valid: false,
                    touched: false,
                },
            }
        }
    );
    const inputChangeHandler = (event, controlName) => {
        const updatedControls = { 
            ...state.controls
        }
        const updatedFormElement = { 
            ...updatedControls[controlName]
        }
        console.log("event.target.files[0]", event.target.files[0].name)
        updatedFormElement.value = ""; 
        updatedFormElement.name = event.target.files[0].name; 
        updatedFormElement.valid = checkValidity(updatedFormElement.name, updatedFormElement.validation) 
        updatedFormElement.touched = true;
        console.log(updatedFormElement)
        updatedControls[controlName] = updatedFormElement 
        let previewURL = URL.createObjectURL(event.target.files[0]);
        setImagePreview(previewURL);
        setImage(event.target.files[0])
    };

    const formElementsArray = [];
    for (let key in state.controls) {
        formElementsArray.push({
            id: key,
            config: state.controls[key]
        })
    }
  

    return (
        <React.Fragment>
            {
         formElementsArray.map(formElement => (
            <Input
                style={{color: 'white'}}
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
        ))}
        </React.Fragment>
    )
};

export default ImageUpload;