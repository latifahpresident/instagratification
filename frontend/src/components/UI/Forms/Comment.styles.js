import styled from "styled-components";

export const Input = styled.input`
    margin: ${props => props.commentInput ? `1rem` : `0 1rem`};
    width: 90%;
    border: ${props => props.commentInput ? `none` : null};
    &:focus {
        outline: transparent;
    }
    &::placeholder {
        font-size: 1rem;
    }
`;