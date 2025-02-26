import styled from 'styled-components';

type TableHeaderProps = {
  children: React.ReactNode;
  shouldShow?: boolean;
  isCircle?: boolean;
};

const StyledTableHeader = styled.th<{ $shouldShow?: boolean; $isCircle?: boolean }>`
  display: ${(props) => (props.$shouldShow ? 'none' : 'table-cell')};
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.rg_xs};
  text-align: ${(props) => (props.$isCircle ? 'center' : 'left')};
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, shouldShow, isCircle }) => {
  return (
    <StyledTableHeader $shouldShow={shouldShow} $isCircle={isCircle}>
      {children}
    </StyledTableHeader>
  );
};

export default TableHeader;
