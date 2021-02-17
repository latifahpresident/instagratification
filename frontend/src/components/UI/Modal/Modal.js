import React from 'react';
import { ModalWrapper } from './Modal.styles';
import Backdrop from './../Backdrop/Backdrop';

const Modal = (props) => {
    const { showModal, modalHandler } = props;
    return (
        <React.Fragment>
            <Backdrop showModal={showModal} modalHandler={modalHandler}/>
             <ModalWrapper showModal={showModal}>
                {props.children}
            </ModalWrapper>
        </React.Fragment>
    )
};

export default Modal;