import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Pagination from '../../components/ui/Pagination'

describe('Pagination component', () => {
  test('renders navigation and page buttons, and handles page changes', () => {
    const onPageChange = jest.fn()
    render(<Pagination currentPage={2} totalPages={4} onPageChange={onPageChange} />)

    expect(screen.getByRole('navigation', { name: /pagination/i })).toBeInTheDocument()
    // Page buttons
    expect(screen.getByRole('button', { name: /1/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /2/ })).toBeInTheDocument()

    // Click a page
    fireEvent.click(screen.getByRole('button', { name: /1/ }))
    expect(onPageChange).toHaveBeenCalledWith(1)

    // Click next
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(onPageChange).toHaveBeenCalledWith(3)
  })
})
