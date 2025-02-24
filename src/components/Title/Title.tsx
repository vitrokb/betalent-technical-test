import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

export default Title;
