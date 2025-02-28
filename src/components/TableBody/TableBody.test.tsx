import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';
import TableBody from '../TableBody';
import useMediaQuery from '../../hooks/useMediaQuery';
import { theme } from '../../styles/theme';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

vi.mock('../../hooks/useMediaQuery');

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

describe('TableBody Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render table rows with employee data on web version', () => {
    vi.mocked(useMediaQuery).mockReturnValue(false);

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <TableBody />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByAltText('Photo of João')).toBeVisible();
    expect(screen.getByText('João')).toBeVisible();
    expect(screen.getByText('Back-end')).toBeVisible();
    expect(screen.getByText('01/12/2019')).toBeVisible();
    expect(screen.getByText('+55 (51) 234567890')).toBeVisible();

    expect(screen.getByAltText('Photo of Roberto')).toBeVisible();
    expect(screen.getByText('Roberto')).toBeVisible();
    expect(screen.getByText('Front-end')).toBeVisible();
    expect(screen.getByText('11/03/2020')).toBeVisible();
    expect(screen.getByText('+55 (50) 321654789')).toBeVisible();
  });

  it('should render table rows with employee data on mobile version', () => {
    vi.mocked(useMediaQuery).mockReturnValue(true);

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <TableBody />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByAltText('Photo of João')).toBeVisible();
    expect(screen.getByText('João')).toBeVisible();
    expect(screen.queryByText('Back-end')).not.toBeInTheDocument();
    expect(screen.queryByText('01/12/2019')).not.toBeInTheDocument();
    expect(screen.queryByText('+55 (51) 234567890')).not.toBeInTheDocument();

    expect(screen.getByAltText('Photo of Roberto')).toBeVisible();
    expect(screen.getByText('Roberto')).toBeVisible();
    expect(screen.queryByText('Front-end')).not.toBeInTheDocument();
    expect(screen.queryByText('11/03/2020')).not.toBeInTheDocument();
    expect(screen.queryByText('+55 (50) 321654789')).not.toBeInTheDocument();
  });

  it('should toggle row expansion when clicking the button on mobile version', () => {
    vi.mocked(useMediaQuery).mockReturnValue(true);

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <TableBody />
        </ThemeProvider>
      </EmployeesProvider>
    );

    const toggleButtons = screen.getAllByRole('button');

    expect(screen.queryByText('Back-end')).not.toBeInTheDocument();
    expect(screen.queryByText('01/12/2019')).not.toBeInTheDocument();
    expect(screen.queryByText('+55 (51) 234567890')).not.toBeInTheDocument();
    expect(screen.queryByText('Front-end')).not.toBeInTheDocument();
    expect(screen.queryByText('11/03/2020')).not.toBeInTheDocument();
    expect(screen.queryByText('+55 (50) 321654789')).not.toBeInTheDocument();

    fireEvent.click(toggleButtons[0]);
    expect(screen.queryByText('Back-end')).toBeVisible();
    expect(screen.getByText('01/12/2019')).toBeVisible();
    expect(screen.getByText('+55 (51) 234567890')).toBeVisible();

    fireEvent.click(toggleButtons[0]);
    expect(screen.queryByText('Back-end')).not.toBeInTheDocument();
  });
});
