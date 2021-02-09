import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { register } from '../../store/actions/user';
import Input from './../../components/UI/Input/Input';

const Auth = () => {
 const dispatch = useDispatch();
    const [state, setState] = useState(
        {
            controls: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                full_name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Full Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                username: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Username'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Password'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
            }
        }
    );

    console.log("STATE.CONTROLS", state.controls)

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {firebase_id: '55607777', "profile_url": "https://s3.amazonaws.com/uifaces/faces/twitter/bergmartin/128.jpg"}
        console.log("FORM DATA FROM HANDLER", formData)
        for (let formElementIdentifier in state.controls) {
            formData[formElementIdentifier] = state.controls[formElementIdentifier].value
        }
        dispatch(register(formData))

    }
    const inputChangeHandler = (event, controlName) => {
        const updatedControls = { //make copy of controls (email, password, etc)
            ...state.controls
        }
        const updatedFormElement = { // update individual element like email
            ...updatedControls[controlName]
        }
        updatedFormElement.value = event.target.value; // set form element to the value the user is inputting
        updatedControls[controlName] = updatedFormElement // update the control to the user value
        setState({controls: updatedControls})
    }
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
            changed={ (event) => inputChangeHandler(event, formElement.id)}
        />
    ))
    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                    {form}
                <button>Sign up</button>
            </form>
        </div>
    )
};

export default Auth;