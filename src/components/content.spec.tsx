import { render, screen } from '@testing-library/react';
import { Content } from './Content';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ refresh: jest.fn() }),
}));

describe('Content', () => {
  it('should render the content component', () => {
    render(<Content />);
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});
