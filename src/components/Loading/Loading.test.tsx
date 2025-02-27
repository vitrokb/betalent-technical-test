import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Loading from './Loading';

describe('Loading component', () => {
  it('should render the Loading correctly', () => {
    render(<Loading />);

    expect(screen.getByTestId('loader')).toBeVisible();
  });
});
