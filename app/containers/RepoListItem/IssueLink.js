import styled from 'styled-components';
import NormalA from 'components/A';

const IssueLink = styled(NormalA)`
  height: 100%;
  color: #a76664;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #faa353;
  }
`;

export default IssueLink;
