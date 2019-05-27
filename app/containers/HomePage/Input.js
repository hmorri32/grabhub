import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  border-bottom: 1px dotted #999;
  &:focus {
    border-bottom: 1px solid #a76664;
    color: #a76664;
  }
`;

export default Input;
