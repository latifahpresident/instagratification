import styled from "styled-components";

export const primaryBlue = '#0096F6';
export const grayBorder = '#DBDBDB';
export const likedColor = '#ED4956';
export const paddingLR = '.5rem';

export const MainWrapper = styled.main`
    /* border: 1px solid red; */
    margin-top: 4rem;
`;
export const ButtonIcon = styled.button`
    padding-top: .8rem;
    background: none;
    border: none;

    .icon {
        font-size: 1.2rem;
    }

    .heart {
        -webkit-text-stroke-color: black;
        -webkit-text-stroke-width: 1px;
        font-size: 1.4rem;

    }
    
`;

export const SmallParagraph = styled.p`
    font-size: .83rem;
    font-weight: ${props => props.bold ? 600 : `normal`};
    margin: ${props => props.nomargin ? 0 : null};
`;