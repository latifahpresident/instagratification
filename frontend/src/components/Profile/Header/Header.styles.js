import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    /* border: 1px solid green; */
    align-items: center;
`;

export const HeaderNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    /* border: 1px solid hotpink; */
    width: 95%;
    .username {
        margin: .5rem 0;
        /* border: 1px solid blue; */
        font-size: 1.6rem;
    }

    .chevDown {
        margin-top: .5rem;
    }
    .icons {
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-around;
        width: 30%;
        align-items: center;
    }
    .icon {
        font-weight: 200;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    /* border: 1px solid; */
    width: 90%;
    margin-top: 2rem;
    padding: 0 1rem;
    .userInfo {
        display: flex;
        flex-direction: column;
    }

`;

export const HeaderUserContent = styled.div`
        display: flex;
        flex-direction: column;
        /* border: 1px solid hotpink; */
        width: 25%;
`;

export const HeaderFollowersContent = styled.div`
        display: flex;
        flex-direction: column;
        /* border: 1px solid green; */
        margin-left: 2rem;
        p {
            text-align: center;
            font-size: 1rem;
        }

        span {
            font-weight: 700;
        }
`;