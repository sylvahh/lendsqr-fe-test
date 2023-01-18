import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DataTable from '../components/dashboard/DataTable';

describe('DataTable', () => {
  let mockedUsers: any[];

  beforeEach(() => {
    // Arrange
    mockedUsers = [
      {
        orgName: 'Org 1',
        userName: 'User 1',
        createdAt: '2021-01-01',
        email: 'user1@example.com',
        phoneNumber: '1234567890',
        status: 'active',
      },
      {
        orgName: 'Org 2',
        userName: 'User 2',
        createdAt: '2021-02-01',
        email: 'user2@example.com',
        phoneNumber: '0987654321',
        status: 'inactive',
      },
      // add more mocked users as needed
    ];
    localStorage.setItem('usersData', JSON.stringify(mockedUsers));
  });

  afterEach(() => {
    // Clean up
    localStorage.clear();
  });

  it('should render the table with all users', () => {
    // Act
    render(<DataTable />);

    // Assert
    mockedUsers.forEach((user) => {
      expect(screen.getByText(user.userName)).toBeInTheDocument();
      expect(screen.getByText(user.orgName)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
      expect(screen.getByText(user.phoneNumber)).toBeInTheDocument();
    });
  });

  it('should filter the table when form is submitted', () => {
    // Act
    render(<DataTable />);

    // Open filter form
    const filterButton = screen.getByRole('button', { name: 'filter_icon' });
    fireEvent.click(filterButton);

    // Fill in form fields
    const orgNameInput = screen.getByLabelText('Organization');
    fireEvent.change(orgNameInput, { target: { value: 'Org 1' } });
    const userNameInput = screen.getByLabelText('Username');
    fireEvent.change(userNameInput, { target: { value: 'User 1' } });
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'user1@example.com' } });
    const phoneNumberInput = screen.getByLabelText('Phone Number');
    fireEvent.change(phoneNumberInput, { target: { value: '1234567890' } });
    const createdAtInput = screen.getByLabelText('Created At');
    fireEvent.change(createdAtInput, { target: { value: '2021-01-01' } });

    // Submit form
    const submitButton = screen.getByText('Filter');
    fireEvent.click(submitButton);

    // Assert
    expect(screen.getByText(mockedUsers[0].userName)).toBeInTheDocument();
    expect(screen.getByText(mockedUsers[0].orgName)).toBeInTheDocument();
    expect(screen.getByText(mockedUsers[0].email)).toBeInTheDocument();
    expect(screen.getByText(mockedUsers[0].phoneNumber)).toBeInTheDocument();
    mockedUsers.slice(1).forEach((user) => {
      expect(screen.queryByText(user.userName)).not.toBeInTheDocument();
      expect(screen.queryByText(user.orgName)).not.toBeInTheDocument();
      expect(screen.queryByText(user.email)).not.toBeInTheDocument();
      expect(screen.queryByText(user.phoneNumber)).not.toBeInTheDocument();
    });
  });
});
