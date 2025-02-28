import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

describe('ErrorMessage component', () => {
  it('should render the correctly error message', () => {
    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <ErrorMessage />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(
      screen.getByText('Algo deu errado ao carregar a tabela, tente novamento mais tarde!')
    ).toBeVisible();
  });
});
