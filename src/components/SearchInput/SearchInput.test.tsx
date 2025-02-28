import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SearchInput from '../SearchInput';
import useEmployees from '../../hooks/useEmployees/useEmployees';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

vi.mock('../../hooks/useEmployees/useEmployees');
vi.mock('use-debounce', () => ({
  useDebouncedCallback: (fn: void) => fn,
}));

const mockData = [
  {
    id: 1,
    name: 'João',
    job: 'Back-end',
    admission_date: '2019-12-02T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 2,
    name: 'Roberto',
    job: 'Front-end',
    admission_date: '2020-03-12T00:00:00.000Z',
    phone: '5550321654789',
    image:
      'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
  },
];

describe('SearchInput Component', () => {
  const dispatchMock = vi.fn();

  beforeEach(() => {});

  it('should render search input correctly', () => {
    vi.mocked(useEmployees).mockReturnValue({
      state: {
        employees: mockData,
        error: null,
        loading: false,
        allEmployees: null,
      },
      dispatch: dispatchMock,
    });

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <SearchInput />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByPlaceholderText('Pesquisar')).toBeInTheDocument();
  });

  it('should call dispatch when typing in the search input', () => {
    vi.mocked(useEmployees).mockReturnValue({
      state: {
        employees: mockData,
        error: null,
        loading: false,
        allEmployees: null,
      },
      dispatch: dispatchMock,
    });

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <SearchInput />
        </ThemeProvider>
      </EmployeesProvider>
    );

    const input = screen.getByPlaceholderText('Pesquisar');

    fireEvent.change(input, { target: { value: 'João' } });
    expect(dispatchMock).toHaveBeenCalled();
  });

  it('should reset employees list when search is cleared', () => {
    vi.mocked(useEmployees).mockReturnValue({
      state: {
        employees: mockData,
        error: null,
        loading: false,
        allEmployees: null,
      },
      dispatch: dispatchMock,
    });

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <SearchInput />
        </ThemeProvider>
      </EmployeesProvider>
    );

    const input = screen.getByPlaceholderText('Pesquisar');

    fireEvent.change(input, { target: { value: 'João' } });
    fireEvent.change(input, { target: { value: '' } });

    expect(dispatchMock).toHaveBeenCalled();
  });
});
