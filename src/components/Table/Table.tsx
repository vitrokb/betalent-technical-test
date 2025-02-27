import styled from 'styled-components';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';
import useEmployees from '../../hooks/useEmployees/useEmployees';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Table = () => {
  const { state } = useEmployees();

  if (state.error) {
    return <ErrorMessage />;
  }

  if (state.loading) {
    return <Loading />;
  }

  return (
    <StyledTable>
      <TableHead />
      <TableBody />
    </StyledTable>
  );
};

export default Table;
