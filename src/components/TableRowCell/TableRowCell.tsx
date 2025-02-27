import styled from 'styled-components';

type TableRowCellProps = {
  children: React.ReactNode;
  bold?: boolean;
  staticCell?: boolean;
  lastCell?: boolean;
};

const StyledTableRowCell = styled.td<{
  $bold?: boolean;
  $staticCell?: boolean;
  $lastCell?: boolean;
}>`
  background-color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) =>
    props.$bold ? props.theme.fontWeight.medium : props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.black};
  height: 49px;
  padding-left: ${(props) => (props.$lastCell ? 0 : '16px')};
  text-align: ${(props) => (props.$lastCell ? 'center' : 'left')};
  vertical-align: middle;
  width: ${(props) => (props.$staticCell ? '20%' : 'auto')};

  @media (min-width: 500px) {
    height: 60px;
    width: auto;
    padding-left: 16px;
    text-align: left;
  }
`;

const TableRowCell: React.FC<TableRowCellProps> = ({ children, bold, staticCell, lastCell }) => {
  return (
    <StyledTableRowCell $bold={bold} $staticCell={staticCell} $lastCell={lastCell}>
      {children}
    </StyledTableRowCell>
  );
};

export default TableRowCell;
