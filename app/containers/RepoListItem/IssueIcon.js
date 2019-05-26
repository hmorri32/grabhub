import styled from 'styled-components';

import NormalIssueIcon from 'components/IssueIcon';

const IssueIcon = styled(NormalIssueIcon)`
  fill: #a76664;
  margin-right: 0.25em;
  &:hover {
    fill: #faa353;
  }
`;

export default IssueIcon;
