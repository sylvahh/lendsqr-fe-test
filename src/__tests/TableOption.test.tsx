import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import TableOptions from '../components/dashboard/TableOptions';
import { fetchUser } from '../components/utilities';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../components/utilities', () => ({
  fetchUser: jest.fn(),
}));

describe('TableOptions', () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders table options with view, activate and blacklist buttons', () => {
    const userId = '123';
    render(<TableOptions userId={userId} />);

    expect(screen.getByText('view details')).toBeInTheDocument();
    expect(screen.getByText('activate user')).toBeInTheDocument();
    expect(screen.getByText('blacklist user')).toBeInTheDocument();
  });

  test('calls fetchUser with the correct arguments', () => {
    const userId = '123';
    render(<TableOptions userId={userId} />);

    expect(fetchUser).toHaveBeenCalledWith('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users', userId);
  });

  test('calls navigate function when view details button is clicked', () => {
    const userId = '123';
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(<TableOptions userId={userId} />);

    fireEvent.click(screen.getByText('view details'));
    expect(navigateMock).toHaveBeenCalledWith('/user-details');
  });
});
