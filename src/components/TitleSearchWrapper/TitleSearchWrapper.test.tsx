import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TitleSearchWrapper from './TitleSearchWrapper';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('TitleSearchWrapper component', () => {
  it('should render the TitleSearchWrapper correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <TitleSearchWrapper />
      </ThemeProvider>
    );

    expect(screen.getByText('Funcionários')).toBeVisible();
    expect(screen.getByRole('textbox')).toBeVisible();
  });
});
