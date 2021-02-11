import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import { auth } from '../../utilities/firebaseConfig';
import Input from './../../components/UI/Input/Input';
import AuthWrapper from './../../components/Auth/Auth';
import ButtonComponent from '../../components/UI/Buttons/Button';

const Auth = (props) => {
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
                    touched: false,
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Password'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 8,
                    },
                    valid: false,
                    touched: false
                },
            }
        }
    );

    const checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid; //remove white space then if value is not an empty string then isValis is true
        } 
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        } 
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');



    const  signIn = (formData) => {
         auth.signInWithEmailAndPassword(formData.email, formData.password)
         .then(({user}) => {
             if (user) {
                 props.history.push(`/profile/${user.uid}`)
             } else {
                setError(true)
                setErrorMsg('There was an error signing in.')
             }
         })
         .catch(err => {
            setError(true)
            setErrorMsg(err.message)
         })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {profile_url: "https://s3.amazonaws.com/uifaces/faces/twitter/bergmartin/128.jpg"}
        for (let formElementIdentifier in state.controls) {
            formData[formElementIdentifier] = state.controls[formElementIdentifier].value
        }
       signIn(formData);
       
    };

    const inputChangeHandler = (event, controlName) => {
        const updatedControls = { //make copy of controls (email, password, etc)
            ...state.controls
        }
        const updatedFormElement = { // update individual element like email
            ...updatedControls[controlName]
        }
        updatedFormElement.value = event.target.value; // set form element to the value the user is inputting
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation) //pass in form element value and validation rules
        updatedFormElement.touched = true;
        console.log(updatedFormElement)
        updatedControls[controlName] = updatedFormElement // update the control to the user value
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
            errorMsg={errorMsg}
            changed={ (event) => inputChangeHandler(event, formElement.id)}
        />
    ))

    return (
        
        <AuthWrapper>
            <form onSubmit={handleSubmit} style={{width: `80%`}}>
                    {form}
                <ButtonComponent
                    className='primary'
                    text={'Sign In'}
                    size={'xl'}
                />
            </form>
        </AuthWrapper>
    )
};

export default withRouter(Auth);