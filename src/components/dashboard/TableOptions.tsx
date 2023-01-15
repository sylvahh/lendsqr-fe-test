import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import blacklistIcon from '../../assets/blacklist-opt.svg';
import viewIcon from '../../assets/view-opt.svg';
import activateIcon from '../../assets/activate-opt.svg';
import { fetchUser } from '../utilities';

export let userID = undefined;
const userApi = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';

const TableOptions = (props: any) => {
  const { userId } = props;
  const Navigate = useNavigate();

  useEffect(() => {
    fetchUser(userApi, userId);
  }, [userId]);

  console.log(userId);
  const viewDetails = () => {
    Navigate('/user-details');
  };
  return (
    <div id='table-options' className=''>
      <div className='table-options_wraper'>
        <button className='options' onClick={viewDetails}>
          <img src={viewIcon} alt='' /> <span> view details</span>
        </button>
        <button className='options'>
          <img src={activateIcon} alt='' /> <span> activate user</span>
        </button>
        <button className='options'>
          <img src={blacklistIcon} alt='' /> <span> blacklist user</span>
        </button>
      </div>
    </div>
  );
};

export default TableOptions;
