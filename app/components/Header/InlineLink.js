import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const InlineLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.7em;
  color: #a76664;
  font-weight: bold;
  text-decoration: none;
  svg {
    color: #a76664;
    height: 70px;
    width: 70px;
  }
  &:hover {
    svg {
      animation: ${rotate} 5s linear infinite;
      color: #faa353;
    }
    color: #faa353;
  }

  &:active {
    svg {
      color: #a76664;
    }
    color: #a76664;
  }
`;

export default InlineLink;
