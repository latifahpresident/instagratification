import styled from 'styled-components';

export const GridWrapper = styled.section`
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const GridImage = styled.div`
   max-width: 123px;
    max-height: 123px;
    min-width: 123px;
    min-height: 123px;
    /* border: 1px solid green; */
    margin-bottom: .2rem;
    img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
    }
`;