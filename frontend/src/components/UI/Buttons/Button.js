import React from 'react';
import { Button } from './Button.styles';

const ButtonComponent = (props) => {
    const { className, type, text, size } = props
    console.log('TEXT FROM BUTTON')
    return (
        <Button nomargin size={size} btnColor={className} type={type}>{text}</Button>
    )
};

export default ButtonComponent;