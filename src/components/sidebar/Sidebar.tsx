import React from 'react';
import homeIcon from '../../assets/home 1.png';
import briefcase from '../../assets/briefcase 1.png';
import dropdownbtn from '../../assets/Vectoricon.svg';
import logoText from '../../assets/lendsqr.svg';

import { SidebarLinks, customerLinks, businessLinks, settingsLinks } from './SidebarLinks';
import { toggler } from '../utilities';

// let links = SidebarLinks.map( link => {

//     return links.name

// })

// const toggler = () =>{
//   let sidebar = document.getElementById('sidebar')

//   // sidebar !== null && sidebar.style.display ='block'
//   if (sidebar !== null) {
//     sidebar.style.display = 'none'
//   }

// }

const Sidebar = () => {
  return (
    <div id='sidebar'>
      <div className='sidebar_content'>
        <div className='close-btn'>
          <img src={logoText} alt='' />
          <strong>
            {' '}
            <button onClick={() => toggler('sidebar', 'none')}>X</button>
          </strong>
        </div>
        <a href='' className='sidebar_links_top'>
          <img src={briefcase} alt='' />
          <span>
            {' '}
            switch organization{' '}
            <span>
              <img src={dropdownbtn} alt='' />
            </span>
          </span>
        </a>

        <a href='' className='sidebar_links'>
          <img src={homeIcon} alt='' />
          <span> dashboard </span>
        </a>

        <span className='sidebar_category'>Customer</span>

        {SidebarLinks.map((link) => {
          return (
            link.category === 'customer' && (
              <a
                key={link.id}
                href={link.id === 1 ? link.path : undefined}
                className={link.id === 1 ? 'sidebar_links_active' : 'sidebar_links'}
              >
                <img src={link.icon} alt='' />
                <span> {link.name}</span>
              </a>
            )
          );
        })}
        <span className='sidebar_category'>Business</span>

        {SidebarLinks.map((link) => {
          return (
            link.category === 'business' && (
              <a key={link.id} className='sidebar_links'>
                <img src={link.icon} alt='' />
                <span> {link.name}</span>
              </a>
            )
          );
        })}
        <span className='sidebar_category'>Settings</span>

        {SidebarLinks.map((link) => {
          return (
            link.category === 'settings' && (
              <a key={link.id} className='sidebar_links'>
                <img src={link.icon} alt='' />
                <span> {link.name}</span>
              </a>
            )
          );
        })}
      </div>
      {/* sidebar */}
    </div>
  );
};

export default Sidebar;
