import { render, screen } from '@testing-library/react';
import { Resume } from './Resume';

describe('Resume', () => {
  it('should render the resume component', () => {
    render(<Resume />);
    expect(screen.getByTestId('resume')).toBeInTheDocument();
  });
});
