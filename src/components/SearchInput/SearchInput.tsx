import styled from 'styled-components';
import SearchIcon from '../../assets/search.svg';
import useEmployees from '../../hooks/useEmployees/useEmployees';
import { useDebouncedCallback } from 'use-debounce';
import searchInFields from '../../utils/searchInFields';

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

const SearchInput = () => {
  const { state, dispatch } = useEmployees();

  const debounced = useDebouncedCallback((value) => {
    if (!value) {
      return dispatch({ type: 'SET_EMPLOYEES', payload: state.allEmployees });
    }

    const filteredEmployees = searchInFields(state.allEmployees, value);
    return dispatch({ type: 'SET_EMPLOYEES', payload: filteredEmployees });
  }, 1000);

  return (
    <SearchContainer>
      <StyledSearchInput
        type="text"
        placeholder="Pesquisar"
        onChange={(event) => debounced(event.target.value)}
      />
      <StyledSearchIcon src={SearchIcon} alt="Search Icon" />
    </SearchContainer>
  );
};

export default SearchInput;
