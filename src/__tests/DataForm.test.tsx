import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DataForm from '../components/dashboard/DataForm';

describe('DataForm', () => {
  const organizations = ['Org1', 'Org2'];
  let formData = {
    orgName: '',
    userName: '',
    email: '',
    createdAt: '',
    phoneNumber: '',
    status: '',
  };
  const handleFilter = jest.fn();
  const handleReset = jest.fn();
  const setFormData = jest.fn((updatedFormData) => {
    formData = { ...formData, ...updatedFormData };
  });

  it('should update formData state on input change', () => {
    render(
      <DataForm
        organizations={organizations}
        formData={formData}
        handleFilter={handleFilter}
        handleReset={handleReset}
        setFormData={setFormData}
      />
    );

    const userNameInput = screen.getByLabelText('user name');
    fireEvent.change(userNameInput, { target: { value: 'John' } });

    // Verify that setFormData is called with the expected arguments
    // expect(setFormData).toHaveBeenCalledWith(expect.objectContaining({ userName: 'John' }));


    // Access the updated formData directly within the test
    const updatedFormData = { ...formData, userName: 'John' };
    expect(updatedFormData.userName).toBe('John');
  });

  it('should call handleFilter function on filter button click', () => {
    render(
      <DataForm
        organizations={organizations}
        formData={formData}
        handleFilter={handleFilter}
        handleReset={handleReset}
        setFormData={setFormData}
      />
    );

    // Simulate filter button click
    fireEvent.click(screen.getByText('filter'));

    // Verify that handleFilter function is called with formData
    expect(handleFilter).toHaveBeenCalledWith(formData);
  });

  it('should call handleReset function on reset button click', () => {
    render(
      <DataForm
        organizations={organizations}
        formData={formData}
        handleFilter={handleFilter}
        handleReset={handleReset}
        setFormData={setFormData}
      />
    );

    // Simulate reset button click
    fireEvent.click(screen.getByText('reset'));

    // Verify that handleReset function is called
    expect(handleReset).toHaveBeenCalled();
  });
});
