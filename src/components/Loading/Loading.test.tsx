import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Loading from './Loading';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('Loading component', () => {
  it('should render the Loading correctly', () => {
    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <Loading />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByTestId('loader')).toBeVisible();
  });
});
