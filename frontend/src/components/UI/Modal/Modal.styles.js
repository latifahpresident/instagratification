import styled from 'styled-components';
import { device, slideInUp } from './../../../global-styles/global.styles';

export const ModalWrapper = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 100%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    /* left: 15%;
    top: 30%; */
    bottom: 0;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    height: 400px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    animation-name: ${slideInUp};
 animation-duration: 1s;
 animation-iteration-count: 1;
    display: ${props => props.showModal ? `block` : `none`};
    @media ${device.tablet} {
        width: 500px;
        left: calc(50% - 250px);
    }
`;