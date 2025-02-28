import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;
`;

const StyledText = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.black};
`;

const EmptyTable = () => {
  return (
    <StyledWrapper>
      <StyledText>Não há informações a serem mostradas na tabela!</StyledText>
    </StyledWrapper>
  );
};

export default EmptyTable;
