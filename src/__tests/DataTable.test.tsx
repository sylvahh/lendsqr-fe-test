import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataTable from '../components/dashboard/DataTable';

describe('DataTable', () => {
  const users = [
    {
      orgName: 'Org1',
      userName: 'User1',
      createdAt: '2022-01-01',
      email: 'user1@example.com',
      phoneNumber: '1234567890',
      status: 'Active',
    },
    // Add more test data here if needed
  ];

  beforeEach(() => {
    localStorage.setItem('usersData', JSON.stringify(users));
  });

  afterEach(() => {
    localStorage.removeItem('usersData');
  });


  

  test('renders table with user data', async() => {
    render(<DataTable />);

    // Verify the table headers
    expect(screen.getByText('organization')).toBeInTheDocument();
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone number')).toBeInTheDocument();
    expect(screen.getByText('Date joined')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });
});
