import styled from 'styled-components';
import TableHead from '../TableHead';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Table = () => {
  return (
    <StyledTable>
      <TableHead />
    </StyledTable>
  );
};

export default Table;
