import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Bio } from './Bio';

describe('Bio', () => {
  it('should render the bio component', () => {
    render(<Bio />);
    expect(screen.getByTestId('bio')).toBeInTheDocument();
  });
});
