import Register from "@/pages/signup";
import { act, render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

jest.mock('next/router', () => require('next-router-mock'))

describe("Register Page", () => {
    it("Should render the Register Page", () => {
    act(() => {
      render(<Register/>)
    })
    const registerPage = screen.getByTestId('register-page');
    expect(registerPage).toBeInTheDocument()

    const nameInput = screen.getByLabelText('Name');
    expect(nameInput).toBeInTheDocument()

    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeInTheDocument()

    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument()

    const numberHpInput = screen.getByLabelText('No. HP');
    expect(numberHpInput).toBeInTheDocument()

    fireEvent.change(nameInput, { target: { value: 'Thariq Agfi Hermawan' } })
    expect(nameInput).toHaveValue('Thariq Agfi Hermawan')

    fireEvent.change(emailInput, { target: { value: 'thoriq.aghfi60@gmail.com' } })
    expect(emailInput).toHaveValue('thoriq.aghfi60@gmail.com')

    fireEvent.change(passwordInput, { target: { value: '123456' } })
    expect(passwordInput).toHaveValue('123456')

    fireEvent.change(numberHpInput, { target: { value: '+6285157871266' } })
    expect(numberHpInput).toHaveValue('+6285157871266')
    })
})