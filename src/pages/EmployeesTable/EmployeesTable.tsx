import styled from 'styled-components';
import TitleSearchSection from '../../components/TitleSearchSection';
import Table from '../../components/Table';
import useFetch from '../../hooks/useFetch';

const StyledEmployeesWrapper = styled.section`
  @media (min-width: 1919px) {
    display: flex;
    justify-content: center;
  }
`;

const StyledEmployeesTable = styled.div`
  margin-right: ${(props) => props.theme.spacing.rg_s};
  margin-left: ${(props) => props.theme.spacing.rg_s};
  max-width: 1280px;

  @media (min-width: 500px) {
    margin: ${(props) => props.theme.spacing.sm};
  }

  @media (min-width: 1919px) {
    width: 100%;
  }
`;

const EmployeesTable = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  useFetch(apiUrl || '');

  return (
    <StyledEmployeesWrapper>
      <StyledEmployeesTable>
        <TitleSearchSection />
        <Table />
      </StyledEmployeesTable>
    </StyledEmployeesWrapper>
  );
};

export default EmployeesTable;
