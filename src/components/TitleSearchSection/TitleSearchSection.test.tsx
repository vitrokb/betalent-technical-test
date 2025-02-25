import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TitleSearchSection from './TitleSearchSection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('TitleSearchSection component', () => {
  it('should render the TitleSearchSection correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <TitleSearchSection />
      </ThemeProvider>
    );

    expect(screen.getByText('Funcionários')).toBeVisible();
    expect(screen.getByRole('textbox')).toBeVisible();
  });
});
