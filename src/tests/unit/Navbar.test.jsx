import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../../features/auth/authSlice'
import Navbar from '../../components/layout/Navbar'
import { MemoryRouter } from 'react-router-dom'

function renderWithStore(preloadedState) {
  const store = configureStore({ reducer: { auth: authReducer }, preloadedState })
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Provider>
  )
}

describe('Navbar component', () => {
  test('shows Login and Register when not authenticated', () => {
    renderWithStore({ auth: { isAuthenticated: false, user: null } })
    expect(screen.getByText(/login/i)).toBeInTheDocument()
    expect(screen.getByText(/register/i)).toBeInTheDocument()
  })

  test('shows user email and Logout when authenticated', () => {
    const user = { email: 'tester@example.com', role: 'user' }
    renderWithStore({ auth: { isAuthenticated: true, user } })
    expect(screen.getByText(/tester@example.com/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
  })
})
