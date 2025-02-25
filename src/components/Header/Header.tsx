import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

const StyledHeader = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.shadow01};
`;

const StyledImage = styled.img`
  margin-left: ${(props) => props.theme.spacing.rg_md};

  @media (min-width: 500px) {
    margin-left: ${(props) => props.theme.spacing.sm};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledImage src={Logo} alt="BeTalent Logo" />
    </StyledHeader>
  );
};

export default Header;
