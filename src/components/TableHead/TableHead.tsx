import styled from 'styled-components';
import TableHeader from '../TableHeader';
import useMediaQuery from '../../hooks/useMediaQuery';
import WhiteCircle from '../../assets/white-circle.svg';

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
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <StyledTableHead>
      <TableHeader>FOTO</TableHeader>
      <TableHeader>NOME</TableHeader>
      <TableHeader shouldShow={isMobile}>CARGO</TableHeader>
      <TableHeader shouldShow={isMobile}>DATA DE EMISSÃO</TableHeader>
      <TableHeader shouldShow={isMobile}>TELEFONE</TableHeader>

      <TableHeader shouldShow={!isMobile}>
        <img src={WhiteCircle} alt="White Circle on table header" />
      </TableHeader>
    </StyledTableHead>
  );
};

export default TableHead;
