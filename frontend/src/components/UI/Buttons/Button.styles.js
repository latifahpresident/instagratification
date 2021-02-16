import styled from 'styled-components';
import { primaryBlue } from './../../../global-styles/global.styles';

export const Button = styled.button`
    border: ${props => props.btnColor === 'primary' ?  `${primaryBlue}` : props.btnColor === 'link' ? 'transparent' : '#FFFF'};;
    color: ${props => props.btnColor === 'primary' ?  'white' : props.btnColor === 'link' ? `${primaryBlue}` : '#FFFF'};;
    background-color:${props => props.btnColor === 'primary' ?  `${primaryBlue}` : props.btnColor === 'link' ? '#FAFAFA' : '#FFFF'};
    height: 35.81px;
    font-weight: 600;
    font-size: 0.875rem;
    width: ${props => props.size === 'lg' ? `80%` : props.size === 'xl' ?  `100%`: '70px'};
    border-radius: 4px;
    /* margin-left: .15rem; */
    margin-right: ${props => props.nomargin ? '0' : '2rem'};
`;

export const LinkButtonWrapper = styled.button`
    background-color: none;
    display: flex;
    color: ${props => props.btnColor ? props.btnColor  : `black`};
    justify-content: space-between;
    margin-top: .3rem;
    width: auto;
    margin-right: .6rem;
    height: auto;
    display: flex;
    align-items: center;
    height: 50px;
    background: transparent;
    border: none;
    font-size: 1rem;
    /* width: ${props => props.size === 'lg' ? `80%` : props.size === 'xl' ?  `100%`: '70px'}; */

`;
