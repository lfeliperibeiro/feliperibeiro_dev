import { render, screen } from '@testing-library/react';
import { Content } from './Content';

describe('Content', () => {
  it('should render the content component', () => {
    render(<Content />);
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});
