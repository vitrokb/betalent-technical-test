import styled from 'styled-components';

type TableRowHeadingProps = {
  children: React.ReactNode;
  bold?: boolean;
};

const StyledTableRowHeading = styled.h3<{ $bold?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) =>
    props.$bold ? props.theme.fontWeight.medium : props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.black};
`;

const TableRowHeading: React.FC<TableRowHeadingProps> = ({ children, bold }) => {
  return <StyledTableRowHeading $bold={bold}>{children}</StyledTableRowHeading>;
};

export default TableRowHeading;
