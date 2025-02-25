import styled from 'styled-components';

type TableHeaderProps = {
  children: React.ReactNode;
};

const StyledTableHeader = styled.th`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.rg_xs};
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export default TableHeader;
