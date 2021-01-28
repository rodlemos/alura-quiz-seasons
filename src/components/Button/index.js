import PropType from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 25px;
    text-transform: uppercase;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.contrastText};
    border: transparent;
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    outline: none;

    &:hover,
    &:focus {
        opacity: .9;
    }
    &:disabled {
        background-color: #979797;
        cursor: not-allowed;
    }
`;

export default Button;