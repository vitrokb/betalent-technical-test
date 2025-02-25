import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TableHeader from './TableHeader';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('TableHeader component', () => {
  it('should render the TableHeader with correctly text', () => {
    render(
      <ThemeProvider theme={theme}>
        <TableHeader>Foto</TableHeader>
      </ThemeProvider>
    );

    expect(screen.getByText('Foto')).toBeVisible();
  });
});
