import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Title from './Title';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('Title component', () => {
  it('should render the Title with correctly text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Title>Funcionarios</Title>
      </ThemeProvider>
    );

    expect(screen.getByText('Funcionarios')).toBeVisible();
  });
});
