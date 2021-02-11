import styled from 'styled-components';

export const FormInput = styled.input`
    width: 270px;
    margin: .5rem;
    height: 30px;
    border: ${props => props.invalid && props.shouldValidate && props.touched ? `1px solid red` : null};
    width: 95%;
`;