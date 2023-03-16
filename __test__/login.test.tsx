import Login from "@/pages/login";
import { act, fireEvent, getByLabelText, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

jest.mock('next/router', () => require('next-router-mock'))

describe("Login Page", () => {
  it("Should render the login page correctly", () => {
    act(() => {
      render(<Login/>)
    })
    const loginPage = screen.getByTestId('login-page')
    expect(loginPage).toBeInTheDocument()

    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeInTheDocument()

    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument()

    fireEvent.change(emailInput, { target: { value: 'thoriq.aghfi60@gmail.com' } })
    expect(emailInput).toHaveValue('thoriq.aghfi60@gmail.com')

    fireEvent.change(passwordInput, { target: { value: '123456' } })
    expect(passwordInput).toHaveValue('123456')
})
  })