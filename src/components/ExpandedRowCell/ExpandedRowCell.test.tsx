import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';
import ExpandedRowCell from '../ExpandedRowCell';
import { theme } from '../../styles/theme';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

describe('ExpandedRowCell Component', () => {
  it('should render correctly informations', () => {
    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <ExpandedRowCell
            job="Front-end"
            admissionDate="2019-12-02T00:00:00.000Z"
            phone="5551234567890"
          />
        </ThemeProvider>
      </EmployeesProvider>
    );

    const job = screen.getByText('Cargo');
    const jobStyles = getComputedStyle(job);

    const admissionDate = screen.getByText('Data de Admissão');
    const admissionDateStyles = getComputedStyle(admissionDate);

    const phone = screen.getByText('Telefone');
    const phoneStyles = getComputedStyle(phone);

    expect(job).toBeVisible();
    expect(jobStyles.fontWeight).toBe('500');
    expect(screen.getByText('Front-end')).toBeVisible();

    expect(admissionDate).toBeVisible();
    expect(admissionDateStyles.fontWeight).toBe('500');
    expect(screen.getByText('01/12/2019')).toBeVisible();

    expect(phone).toBeVisible();
    expect(phoneStyles.fontWeight).toBe('500');
    expect(screen.getByText('+55 (51) 234567890')).toBeVisible();
  });
});
