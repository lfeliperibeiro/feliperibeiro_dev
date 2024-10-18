import { render, screen } from '@testing-library/react';
import { Resume } from './Resume';

describe('Resume', () => {
  it('should render the hero component', () => {
    render(<Resume language="en" />);
    expect(screen.getByTestId('resume')).toBeInTheDocument();
  });
});
