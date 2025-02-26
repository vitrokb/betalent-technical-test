import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { theme } from '../../styles/theme';
import Table from './Table';
import useMediaQuery from '../../hooks/useMediaQuery';

vi.mock('../../hooks/useMediaQuery');

describe('Table component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the table correctly', () => {
    vi.mocked(useMediaQuery).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <Table />
      </ThemeProvider>
    );

    expect(screen.getByText('FOTO')).toBeVisible();
    expect(screen.getByText('João')).toBeVisible();
  });
});
