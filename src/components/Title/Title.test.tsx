import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Title from './Title';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

describe('Title component', () => {
  it('should render the Title with correctly text', () => {
    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <Title>Funcionarios</Title>
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByText('Funcionarios')).toBeVisible();
  });
});
