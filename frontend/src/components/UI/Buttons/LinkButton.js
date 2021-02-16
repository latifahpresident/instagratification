import React from 'react';
import { LinkButtonWrapper } from './Button.styles';

const LinkButton = (props) => {
    const { className, type, text, size, handleClick, } = props

    return (
        <LinkButtonWrapper size={size} btnColor={className} type={type} onClick={handleClick}>{text}</LinkButtonWrapper>
    )
};

export default LinkButton;