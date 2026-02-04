import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '../../components/ui/Modal'

describe('Modal component', () => {
  test('does not render when closed', () => {
    render(<Modal isOpen={false} title="Hidden">content</Modal>)
    expect(screen.queryByText(/hidden/i)).not.toBeInTheDocument()
  })

  test('renders when open and close button calls onClose', () => {
    const onClose = jest.fn()
    render(
      <Modal isOpen={true} title="Hello" onClose={onClose}>
        <div>Body Content</div>
      </Modal>
    )

    expect(screen.getByText(/hello/i)).toBeInTheDocument()
    expect(screen.getByText(/body content/i)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button'))
    expect(onClose).toHaveBeenCalled()
  })
})
