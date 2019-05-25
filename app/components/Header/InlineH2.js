import styled from 'styled-components';
import H2 from 'components/H2';

const InlineH2 = styled(H2)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a76664;
  font-weight: bold;
  svg {
    color: #a76664;
    height: 70px;
    width: 70px;
  }
`;

export default InlineH2;
