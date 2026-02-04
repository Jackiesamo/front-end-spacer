import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from '../../components/ui/Input'

describe('Input component', () => {
  test('renders label and input', () => {
    render(<Input label="Full name" />)
    expect(screen.getByText(/full name/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('shows error message and applies error class', () => {
    render(<Input error="Required" />)
    expect(screen.getByText(/required/i)).toBeInTheDocument()
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-danger')
  })
})
