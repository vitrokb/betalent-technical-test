import styled from 'styled-components';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Table = () => {
  const { data, loading, error } = useFetch('http://localhost:3000/employees');

  if (error) {
    return <ErrorMessage />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledTable>
      <TableHead />
      <TableBody employees={data} />
    </StyledTable>
  );
};

export default Table;
