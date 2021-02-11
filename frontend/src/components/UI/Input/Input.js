import React from 'react';
import {FormInput} from './Input.styles';

const Input = (props) => {
    let inputElement = null;
    switch (props.elementType) { // text, email, selector
        case('input'):
            inputElement = <FormInput 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
                invalid={props.invalid}
                shouldValidate={props.shouldValidate}
                touched={props.touched}
            />
            break;
        case ('textarea'):
            inputElement = <textarea 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
            invalid={props.invalid}
            shouldValidate={props.shouldValidate}
            touched={props.touched}

            />
            break;
        default: inputElement = <FormInput 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
            invalid={props.invalid}
            shouldValidate={props.shouldValidate}
            touched={props.touched}

        />
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p>Please enter a valid value!</p>;
    }
    return (
        <div>
            {inputElement}
            {validationError}
        </div>
    )
};

export default Input;