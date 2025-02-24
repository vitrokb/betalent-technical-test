import styled from 'styled-components';

const TableRow = styled.h3<{ $bold?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) =>
    props.$bold ? props.theme.fontWeight.medium : props.theme.fontWeight.regular};
`;

export default TableRow;
