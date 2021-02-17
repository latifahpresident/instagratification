import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { auth } from '../../utilities/firebaseConfig';
import { register } from '../../store/actions/user';
import Input from './../../components/UI/Input/Input';
import AuthWrapper from './../../components/Auth/Auth';
import ButtonComponent from '../../components/UI/Buttons/Button';

const Auth = (props) => {
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
                    touched: false,
                },
                full_name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Full Name'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 3,
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
                        required: true,
                        minLength: 3,
                        maxLength: 15,
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

   const signUpWithEmailPassword = (formData) => {
        const  email  = formData.email;
        const  password  = formData.password;
        if (!email || !password) {
            setError(true);
            setErrorMsg('Please enter a valid email')
        } 
        auth.createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          if (user) {
            if (user.email) {
              const { email, uid } = user;
              const userObj = {
                email,
                firebase_id: uid,
                full_name: formData.full_name,
                username: formData.username,
                profile_url: formData.profile_url
                };
                console.log("userObj", userObj)
                dispatch(register(userObj))
                props.history.push(`/profile/${uid}`)
            }
          }
        })
        .catch(err => {
          console.log("Error Authenticating User:", err)
          setError(true)
          setErrorMsg(err.message)
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {profile_url: "https://s3.amazonaws.com/uifaces/faces/twitter/bergmartin/128.jpg"}
        console.log("FORM DATA FROM HANDLER", formData)
        for (let formElementIdentifier in state.controls) {
            formData[formElementIdentifier] = state.controls[formElementIdentifier].value
        }
        signUpWithEmailPassword(formData);
       
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
            changed={ (event) => inputChangeHandler(event, formElement.id)}
        />
    ));

    console.log("error msg", errorMsg)
    return (
        
        <AuthWrapper>
            <form onSubmit={handleSubmit} style={{width: `80%`}}>
                    {form}
                <ButtonComponent
                    className='primary'
                    text={'Sign up'}
                    size={'xl'}
                />
            </form>
        </AuthWrapper>
    )
};

export default Auth;