import React, { useEffect, useState } from 'react';
import filterIcon from '../../assets/filter-button.png';

import optionIcon from '../../assets/options.svg';
import nextbtn from '../../assets/next btn.png';
import prevbtn from '../../assets/prev btn.png';
import DataForm from './DataForm';
import TableOptions from './TableOptions';
import {
  convertDateString,
  DataProps,
  IUser,
  toggler,
  truncateString,
  paginate,
  addStatusClass,
} from '../utilities';
import Pagination from './Pagination';

export interface User {
  orgName: string;
  userName: string;
  createdAt: string;
  email: string;
  phoneNumber: string;
  status: string;
}

const DataTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [organizations, setOrganizations] = useState<string[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [openOptionIdx, setOpenOptionIdx] = React.useState<number>(-1);
  const [formData, setFormData] = useState({
    orgName: '',
    userName: '',
    createdAt: '',
    email: '',
    phoneNumber: '',
    status: '',
  });

  const paginatedData = paginate(filteredUsers, dataPerPage);

  const handleOptionButtonClick = (index: number) => {
    if (openOptionIdx === index) {
      setOpenOptionIdx(-1);
    } else {
      setOpenOptionIdx(index);
    }
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDataPerPage(Number(event.target.value));
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem('usersData');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
      setFilteredUsers(JSON.parse(storedUsers));
      setOrganizations(
        Array.from(new Set(JSON.parse(storedUsers).map((user: User) => user.orgName)))
      );
    }
  }, []);

  const handleFilter = (formData: any) => {
    const filtered = users.filter((user) => {
      const userDate = new Date(user.createdAt).toDateString();
      const formDate = new Date(formData.createdAt).toDateString();
      return (
        user.orgName === formData.orgName &&
        user.userName.toLowerCase().includes(formData.userName.toLowerCase()) &&
        user.email.toLowerCase().includes(formData.email.toLowerCase()) &&
        user.phoneNumber.toLowerCase().includes(formData.phoneNumber.toLowerCase()) &&
        userDate === formDate
      );
    });
    setFilteredUsers(filtered);
    console.log(filtered);
  };

  const handleReset = () => {
    setFormData({
      orgName: '',
      userName: '',
      email: '',
      phoneNumber: '',
      status: '',
      createdAt: '',
    });
    setFilteredUsers(users);
  };

  console.log(currentPage);
  return (
    <div id='data_table'>
      <div className='table_wraper'>
        {showForm && (
          <DataForm
            organizations={organizations}
            formData={formData}
            handleFilter={handleFilter}
            handleReset={handleReset}
            setFormData={setFormData}
          />
        )}

        <table>
          <thead>
            <tr>
              <th>
                organization{' '}
                <button onClick={() => setShowForm(true)}>
                  <img src={filterIcon} alt='filter_icon' />
                </button>
              </th>
              <th>
                Username{' '}
                <button onClick={() => setShowForm(!showForm)}>
                  <img src={filterIcon} alt='filter_icon' />
                </button>
              </th>
              <th>
                Email{' '}
                <button onClick={() => setShowForm(!showForm)}>
                  <img src={filterIcon} alt='filter_icon' />
                </button>
              </th>
              <th>
                {' '}
                Phone number{' '}
                <button onClick={() => setShowForm(!showForm)}>
                  <img src={filterIcon} alt='filter_icon' />
                </button>
              </th>
              <th>
                createdAt joined{' '}
                <button onClick={() => setShowForm(!showForm)}>
                  <img src={filterIcon} alt='filter_icon' />
                </button>
              </th>
              <th>
                Status{' '}
                <button onClick={() => setShowForm(!showForm)}>
                  <img src={filterIcon} alt='filter_icon' />
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedData !== null &&
              paginatedData[currentPage].map((user, index) => {

                const status = addStatusClass(user.id);
                return (
                  <tr className='table_data' key={index}>
                    <td>
                      <button> {truncateString(user.orgName, 20)} </button>
                    </td>
                    <td>
                      <button>{user.userName}</button>
                    </td>
                    <td>
                      <button>{user.email}</button>
                    </td>
                    <td>
                      <button>{user.phoneNumber}</button>
                    </td>
                    <td>
                      <button>{convertDateString(user.createdAt)}</button>
                    </td>
                    <td>
                      <button className={status.class}> {status.text} </button>
                    </td>
                    <td className='option-cell'>
                      <button
                        onClick={() => handleOptionButtonClick(index)}
                        className='option_btn close_option'
                      >
                        <img src={optionIcon} alt='' />{' '}
                      </button>{' '}
                      {openOptionIdx === index && <TableOptions userId={user.id} />}{' '}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        dataPerPage={dataPerPage}
        setDataPerPage={setDataPerPage}
        paginatedData={paginatedData}
        currentPageProp={currentPage}
      />
    </div>
  );
};

export default DataTable;
