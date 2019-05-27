import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top: 1px solid #a76664;

  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
