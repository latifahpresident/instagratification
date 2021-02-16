import React from 'react';
import { BackdropWrapper } from './Backdrop.styles';

const Backdrop = (props) => (
        props.showModal?  <BackdropWrapper onClick={props.modalHandler}></BackdropWrapper> : null
    )


export default Backdrop;