import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TitleSearchSection from './TitleSearchSection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

describe('TitleSearchSection component', () => {
  it('should render the TitleSearchSection correctly', () => {
    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <TitleSearchSection />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByText('Funcionários')).toBeVisible();
    expect(screen.getByRole('textbox')).toBeVisible();
  });
});
