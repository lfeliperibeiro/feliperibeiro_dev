import { render, screen } from '@testing-library/react';
import { PageSpeedData, PageSpeedDataType } from './PageSpeedData';

const pageData: PageSpeedDataType = {
  lighthouseResult: {
    categories: {
      performance: { score: 0.9 },
      accessibility: { score: 0.8 },
      'best-practices': { score: 0.85 },
      seo: { score: 0.75 },
    },
  },
};

describe('PageSpeedData', () => {
  it('should render the page speed data component', () => {
    render(<PageSpeedData pageSpeedData={pageData} />);
    expect(screen.getByTestId('page-speed-data')).toBeInTheDocument();
  });
});
