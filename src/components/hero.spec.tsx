import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('should render the hero component', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });
});
