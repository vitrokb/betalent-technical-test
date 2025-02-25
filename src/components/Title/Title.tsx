import styled from 'styled-components';

type TitleProps = {
  children: React.ReactNode;
};

const StyledTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${(props) => props.theme.spacing.rg_md};

  @media (min-width: 500px) {
    margin-bottom: 0;
  }
`;

const Title: React.FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
