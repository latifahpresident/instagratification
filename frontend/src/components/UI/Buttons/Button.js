import React from 'react';
import { Button } from './Button.styles';

const ButtonComponent = (props) => {
    const { className, type, text, size, handleClick, } = props
    return (
        <Button nomargin size={size} btnColor={className} type={type} onClick={handleClick}>{text}</Button>
    )
};

export default ButtonComponent;