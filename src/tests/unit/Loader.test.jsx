import React from 'react'
import { render, screen } from '@testing-library/react'
import Loader from '../../components/ui/Loader'

describe('Loader component', () => {
  test('renders spinner and message', () => {
    const { container } = render(<Loader size="sm" message="Please wait" />)
    expect(screen.getByText(/please wait/i)).toBeInTheDocument()
    expect(container.querySelector('.animate-spin')).toBeInTheDocument()
  })
})
