import React from 'react';
import logo from '../assets/Union.png';
import logoText from '../assets/lendsqr.svg';
import notification from '../assets/notification.png';
import userPhoto from '../assets/image 4.png';
import searchIcon from '../assets/search-icon.svg';
import dropdownBtn from '../assets/Vector-option.png';
import menuIcon from '../assets/menu.svg';
import { toggler } from './utilities';

const DashboardHeader = () => {
  return (
    // <header>
    <div id='dashboard_header'>
      <div className='header_wraper'>
        <div className='header_logo_Wraper'>
          <img className='header_logo' src={logo} alt='logo' />
          <img className='header_logo_text' src={logoText} alt='logoText' />
          <button onClick={() => toggler('sidebar', 'block')} className='header_menu_logo'>
            <img className='' src={menuIcon} alt='hambugar menu' />
          </button>
        </div>
        <div className='search_bar'>
          <input type='text' placeholder='Search for anything' />
          <button>
            <img src={searchIcon} alt='search_icon' />
          </button>
        </div>

        <div className='header_utilities'>
          <a href='#'> Docs</a>
          <img className='notification' src={notification} alt='notification_icon' />

          <button className='user_img_wraper'>
            <img className='user_img' src={userPhoto} alt='userPhoto' />
            <span>
              Adedeji <img src={dropdownBtn} alt='' />
            </span>
          </button>
        </div>
      </div>
    </div>
    // </header>
  );
};

export default DashboardHeader;
