import styled from 'styled-components';
import NormalA from 'components/A';

const RepoLink = styled(NormalA)`
  height: 100%;
  color: black;
  display: flex;
  font-weight: 600;
  align-items: center;
  width: 100%;
  text-decoration: none;
  color: #a76664;
  &:hover {
    color: #faa353;
  }
`;

export default RepoLink;
