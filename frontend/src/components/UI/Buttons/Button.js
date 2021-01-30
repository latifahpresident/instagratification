import React from 'react';
import { Button } from './Button.styles';

const ButtonComponent = (props) => {
    const { className, type, text } = props
    console.log(props.className)
    return (
        <Button btnColor={className} type={type} >{text}</Button>
    )
};

export default ButtonComponent;