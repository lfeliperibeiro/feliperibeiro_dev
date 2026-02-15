import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { ThemeProvider } from './ThemeProvider';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ refresh: jest.fn() }),
}));

function renderHeader() {
  return render(
    <ThemeProvider initialTheme="dark">
      <Header />
    </ThemeProvider>
  );
}

describe('Header', () => {
  it('should render the header with navigation', () => {
    renderHeader();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'nav.ariaLabel' })).toBeInTheDocument();
  });
});
