import styled from 'styled-components';
import TitleSearchSection from '../../components/TitleSearchSection';
import Table from '../../components/Table';
import useFetch from '../../hooks/useFetch';

const StyledEmployeesTable = styled.section`
  margin-right: ${(props) => props.theme.spacing.rg_s};
  margin-left: ${(props) => props.theme.spacing.rg_s};
  max-width: 1280px;

  @media (min-width: 500px) {
    margin: ${(props) => props.theme.spacing.sm};
  }
`;

const EmployeesTable = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  useFetch(apiUrl || '');

  return (
    <StyledEmployeesTable>
      <TitleSearchSection />
      <Table />
    </StyledEmployeesTable>
  );
};

export default EmployeesTable;
