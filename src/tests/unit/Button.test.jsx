import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../../components/ui/Button'

describe('Button component', () => {
  test('renders children text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  test('is disabled when `disabled` prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button', { name: /disabled/i })).toBeDisabled()
  })
})
