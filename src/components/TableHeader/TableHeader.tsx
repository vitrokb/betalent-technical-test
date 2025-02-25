import styled from 'styled-components';

type TableHeaderProps = {
  children: React.ReactNode;
  shouldShow?: boolean;
};

const StyledTableHeader = styled.th<{ $shouldShow?: boolean }>`
  display: ${(props) => (props.$shouldShow ? 'none' : 'table-cell')};
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.rg_xs};
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, shouldShow }) => {
  return <StyledTableHeader $shouldShow={shouldShow}>{children}</StyledTableHeader>;
};

export default TableHeader;
