import styled, {keyframes} from "styled-components";

export const primaryBlue = '#0096F6';
export const grayBorder = '#DBDBDB';
export const likedColor = '#ED4956';
export const paddingLR = '.5rem';
export const darkGrayColor ='#837d7d';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export const MainWrapper = styled.main`
    /* border: 1px solid red; */
    margin-bottom: 5rem;

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

export const slideInUp = keyframes`
    from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;