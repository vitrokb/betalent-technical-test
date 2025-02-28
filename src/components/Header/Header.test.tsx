import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

describe('Header component', () => {
  it('should render the Header correctly', () => {
    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByAltText('BeTalent Logo')).toBeVisible();
  });
});
