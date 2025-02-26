import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';
import TableBody from '../TableBody';
import useMediaQuery from '../../hooks/useMediaQuery';
import { theme } from '../../styles/theme';

vi.mock('../../hooks/useMediaQuery');

describe('TableBody Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render table rows with employee data on web version', () => {
    vi.mocked(useMediaQuery).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <TableBody />
      </ThemeProvider>
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
      <ThemeProvider theme={theme}>
        <TableBody />
      </ThemeProvider>
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
      <ThemeProvider theme={theme}>
        <table>
          <TableBody />
        </table>
      </ThemeProvider>
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
