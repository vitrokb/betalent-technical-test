import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TableRowCell from './TableRowCell';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('TableRowCell component', () => {
  it('should render the TableRowCell with correctly text', () => {
    render(
      <ThemeProvider theme={theme}>
        <TableRowCell>Front-end</TableRowCell>
      </ThemeProvider>
    );

    expect(screen.getByText('Front-end')).toBeVisible();
  });

  it('should render the TableRowCell with a bold text', () => {
    render(
      <ThemeProvider theme={theme}>
        <TableRowCell bold>Front-end</TableRowCell>
      </ThemeProvider>
    );

    const element = screen.getByText('Front-end');
    expect(element).toBeVisible();

    const computedStyle = window.getComputedStyle(element);
    expect(computedStyle.fontWeight).toBe('500');
  });
});
