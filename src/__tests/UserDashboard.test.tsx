import { render, screen } from '@testing-library/react';
import UserDashboard from '../views/userDashboard/UserDashboard';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DataTable from '../components/dashboard/DataTable';

describe('UserDashboard', () => {
  test('renders the dashboard header', () => {
    render(<DashboardHeader />);
  });



  test('renders the data table', () => {
    render(<DataTable />);
    const dataTable = screen.getByRole('table');
    expect(dataTable).toBeInTheDocument();
  });
});
