import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TableHeaderHeading from './TableHeaderHeading';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('TableHeaderHeading component', () => {
  it('should render the TableHeaderHeading with correctly text', () => {
    render(
      <ThemeProvider theme={theme}>
        <TableHeaderHeading>Foto</TableHeaderHeading>
      </ThemeProvider>
    );

    expect(screen.getByText('Foto')).toBeVisible();
  });
});
