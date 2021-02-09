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
            />
            break;
        case ('textarea'):
            inputElement = <textarea 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
            />
            break;
        default: inputElement = <FormInput 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
        />
    }
    return (
        <div>
            {inputElement}
        </div>
    )
};

export default Input;