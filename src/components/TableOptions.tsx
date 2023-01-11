import React from 'react';
import blacklistIcon from '../assets/blacklist-opt.svg';
import viewIcon from '../assets/view-opt.svg';
import activateIcon from '../assets/activate-opt.svg';

const TableOptions = () => {
  return (
    <div id='table-options'>
      <div className='table-options_wraper'>
        <button className='options'>
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
