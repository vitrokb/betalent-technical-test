import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.shadow01};
`;

const StyledImage = styled.img`
  margin-left: 32px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledImage src={Logo} alt="BeTalent Logo" />
    </StyledHeader>
  );
};

export default Header;
