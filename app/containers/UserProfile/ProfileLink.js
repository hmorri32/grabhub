import styled from 'styled-components';
import A from 'components/A';

const ProfileLink = styled(A)`
  margin: 10px 10px 10px 0;
  text-decoration: none;
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

  &:active {
    color: #fff;
  }
`;
export default ProfileLink;
