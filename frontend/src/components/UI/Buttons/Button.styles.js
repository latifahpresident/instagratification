import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { primaryBlue } from './../../../global-styles/global.styles';

export const Button = styled.button`
    border: ${props => props.btnColor === 'primary' ?  `${primaryBlue}` : props.btnColor === 'link' ? 'transparent' : '#FFFF'};;
    color: ${props => props.btnColor === 'primary' ?  'white' : props.btnColor === 'link' ? `${primaryBlue}` : '#FFFF'};;
    background-color:${props => props.btnColor === 'primary' ?  `${primaryBlue}` : props.btnColor === 'link' ? '#FAFAFA' : '#FFFF'};
    height: 30.81px;
    font-weight: 600;
    font-size: 0.875rem;
    width: 70px;
    border-radius: 4px;
    margin-left: .15rem;
`;
const useStyles = makeStyles( ({
    primary: {
        border: "1px solid blue",
        fontSize: ".5rem",
    
    }
}));

export { useStyles }