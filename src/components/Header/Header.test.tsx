import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('Header component', () => {
  it('should render the Header correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByAltText('BeTalent Logo')).toBeInTheDocument();
  });
});
