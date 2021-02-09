import React from 'react';

const Input = (props) => {
    let inputElement = null;
    switch (props.elementType) { // text, email, selector
        case('input'):
            inputElement = <input 
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
        default: inputElement = <input 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
        />
    }
    return (
        <div>
            {/* <label>{props.label}</label> */}
            {inputElement}
        </div>
    )
};

export default Input;