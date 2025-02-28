import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TableHeader from './TableHeader';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

describe('TableHeader component', () => {
  it('should render the TableHeader with correctly text', () => {
    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <TableHeader>Foto</TableHeader>
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByText('Foto')).toBeVisible();
  });
});
