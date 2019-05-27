import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  align-items: center;
  margin: 0 10px 10px 10px;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 26px;
  color: #a76664;

  &:hover {
    border-color: #faa353;
    color: #faa353;
  }
`;
