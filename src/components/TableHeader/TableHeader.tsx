import styled from 'styled-components';

const TableHeader = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.white};
`;

export default TableHeader;
