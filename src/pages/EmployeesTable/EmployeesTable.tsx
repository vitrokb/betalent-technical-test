import styled from 'styled-components';
import TitleSearchSection from '../../components/TitleSearchSection';
import Table from '../../components/Table';

const StyledEmployeesTable = styled.section`
  margin-right: ${(props) => props.theme.spacing.rg_s};
  margin-left: ${(props) => props.theme.spacing.rg_s};
  max-width: 1280px;

  @media (min-width: 500px) {
    margin: ${(props) => props.theme.spacing.sm};
  }
`;

const EmployeesTable = () => {
  return (
    <StyledEmployeesTable>
      <TitleSearchSection />
      <Table />
    </StyledEmployeesTable>
  );
};

export default EmployeesTable;
