import { render, screen } from '@testing-library/react';
import { Resume } from './Resume';

describe('Resume', () => {
  it('should render the resume component', () => {
    render(<Resume language="en" />);
    expect(screen.getByTestId('resume')).toBeInTheDocument();
  });
});
