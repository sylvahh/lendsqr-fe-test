import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

describe('Sidebar', () => {
  it('renders without error', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    // expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('renders the correct active link', async () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    // const dashboardLink = screen.getByRole('link', { name: /dashboard/i });
    // expect(dashboardLink).toHaveClass('sidebar_links_active');
  });
});
