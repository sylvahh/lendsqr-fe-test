import React from 'react';
import { useNavigate } from 'react-router-dom';
import blacklistIcon from '../assets/blacklist-opt.svg';
import viewIcon from '../assets/view-opt.svg';
import activateIcon from '../assets/activate-opt.svg';

const TableOptions = () => {

  const Navigate = useNavigate();
  
  const viewDetails = () => {
    Navigate('/user-details');
  } 
  return (
    <div id='table-options' className=''>
      <div className='table-options_wraper'>
        <button className='options' onClick={viewDetails} >
          <img src={viewIcon} alt='' /> <span> view  details</span>
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
