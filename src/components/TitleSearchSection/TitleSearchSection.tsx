import styled from 'styled-components';
import Title from '../Title/Title';
import SearchInput from '../SearchInput';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${(props) => props.theme.spacing.rg_md};
  margin-right: ${(props) => props.theme.spacing.rg_s};
  margin-left: ${(props) => props.theme.spacing.rg_s};
  margin-bottom: ${(props) => props.theme.spacing.s};
  max-width: 1280px;

  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: ${(props) => props.theme.spacing.sm};
  }
`;

const TitleSearchSection = () => {
  return (
    <Wrapper>
      <Title>Funcionários</Title>
      <SearchInput />
    </Wrapper>
  );
};

export default TitleSearchSection;
