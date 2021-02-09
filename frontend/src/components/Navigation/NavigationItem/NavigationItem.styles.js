import styled from 'styled-components';
import { primaryBlue } from './../../../global-styles/global.styles';

export const NavItem = styled.li`
    list-style-type: none;
    text-decoration: none;
    .nav-link {
        text-decoration: none;
        color: ${primaryBlue};
        /* border: 1px solid green; */
        font-weight: 600;
        font-size: .8rem;
    }
`;