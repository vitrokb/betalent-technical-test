import styled from 'styled-components';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Table = () => {
  return (
    <StyledTable>
      <TableHead />
      <TableBody />
    </StyledTable>
  );
};

export default Table;
