import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import Login from '../views/login/Login';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Login', () => {
  it('should navigate to user dashboard on login button click', () => {
    // Create a mock navigate function
    const mockNavigate = jest.fn();

    // Mock the useNavigate hook
    (useNavigate as jest.Mock<NavigateFunction>).mockReturnValue(mockNavigate);

    // Render the Login component
    render(<Login />);

    // Find the login button and simulate a click event
    const loginButton = screen.getByText('log in');
    fireEvent.click(loginButton);

    // Assert that useNavigate is called with the expected path
    expect(mockNavigate).toHaveBeenCalledWith('/user-dashboard');
  });
});