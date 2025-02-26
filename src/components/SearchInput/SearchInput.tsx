import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/search.svg';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.gray10};
  border-radius: 8px;
  padding: ${(props) => props.theme.spacing.s} ${(props) => props.theme.spacing.tg_xs};
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 500px) {
    width: 310px;
  }
`;

const StyledSearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.black};
  &::placeholder {
    color: ${(props) => props.theme.colors.gray20};
  }
`;

const StyledSearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const SearchInput: React.FC = () => {
  return (
    <SearchContainer>
      <StyledSearchInput type="text" placeholder="Pesquisar" />
      <StyledSearchIcon src={SearchIcon} alt="Search Icon" />
    </SearchContainer>
  );
};

export default SearchInput;
