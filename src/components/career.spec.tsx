import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Career } from './Career';

describe('Career', () => {
  it('should render the career component', () => {
    render(<Career language="en" />);
    expect(screen.getByTestId('career')).toBeInTheDocument();
  });
});
