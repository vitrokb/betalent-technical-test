import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TableRowHeading from './TableRowHeading';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('TableRowHeading component', () => {
  it('should render the TableRowHeading with correctly text', () => {
    render(
      <ThemeProvider theme={theme}>
        <TableRowHeading>Front-end</TableRowHeading>
      </ThemeProvider>
    );

    expect(screen.getByText('Front-end')).toBeVisible();
  });

  it('should render the TableRowHeading with a bold text', () => {
    render(
      <ThemeProvider theme={theme}>
        <TableRowHeading bold>Front-end</TableRowHeading>
      </ThemeProvider>
    );

    const element = screen.getByText('Front-end');
    expect(element).toBeVisible();

    const computedStyle = window.getComputedStyle(element);
    expect(computedStyle.fontWeight).toBe('500');
  });
});
