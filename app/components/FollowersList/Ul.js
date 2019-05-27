import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  padding: 0 1em;
  background: white;

  ::-webkit-scrollbar {
    width: 10px;
    background: #a76664;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #a76664;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #faa353;
  }
`;

export default Ul;
