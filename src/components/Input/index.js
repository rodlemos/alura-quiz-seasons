import styled from 'styled-components';
import PropTypes from 'prop-types'

const InputBox = styled.input`
    width: 100%;
    height: 40px;
    padding-left: 16px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.contrastText};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default function Input({onChange, placeholder, ...props}) {
    return (
        <InputBox onChange={onChange} placeholder={placeholder} {...props}/>        
    )
}

Input.defaultProps = {
    value: '',
  };
  
  Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  };