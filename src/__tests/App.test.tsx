import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

test('renders the login page by default', () => {
  render(
    // <BrowserRouter>
    <App />
    // </BrowserRouter>
  );
  const loginPage = screen.getByText(/Login/i);
  expect(loginPage).toBeInTheDocument();
});
