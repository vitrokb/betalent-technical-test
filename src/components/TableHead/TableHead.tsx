import styled from 'styled-components';
import TableHeader from '../TableHeader';

const StyledTableHead = styled.thead`
  background-color: ${(props) => props.theme.colors.bluePrimary};
  text-align: left;

  :first-child {
    border-top-left-radius: 8px;
  }

  :last-child {
    border-top-right-radius: 8px;
  }
`;

const TableHead = () => {
  return (
    <StyledTableHead>
      <TableHeader>FOTO</TableHeader>
      <TableHeader>NOME</TableHeader>
      <TableHeader>CARGO</TableHeader>
      <TableHeader>DATA DE EMISSÃO</TableHeader>
      <TableHeader>TELEFONE</TableHeader>
    </StyledTableHead>
  );
};

export default TableHead;
