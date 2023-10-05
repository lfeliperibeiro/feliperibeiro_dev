import { render, screen } from '@testing-library/react'
import { MainProjects } from './MainProjects'

describe('MainProjects', () => {
  it('should render the main projects component', () => {
    render(<MainProjects />)
    expect(screen.getByTestId('main-projects')).toBeInTheDocument()
  })
})
