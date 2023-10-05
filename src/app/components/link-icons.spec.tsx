import { render, screen } from '@testing-library/react'
import { LinkIcons } from './LinkIcons'

function FakeComponent() {
  return <div>Teste</div>
}

describe('LinkIcons', () => {
  it('should render the link icons component', () => {
    render(
      <LinkIcons href="any-href">
        <FakeComponent />
      </LinkIcons>,
    )
    expect(screen.getByTestId('link-icons')).toBeInTheDocument()
  })
})
