import styled from 'styled-components';

type TableHeaderHeadingProps = {
  children: React.ReactNode;
};

const StyledTableHeaderHeading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.white};
`;

const TableHeaderHeading: React.FC<TableHeaderHeadingProps> = ({ children }) => {
  return <StyledTableHeaderHeading>{children}</StyledTableHeaderHeading>;
};

export default TableHeaderHeading;
