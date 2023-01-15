import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import backIcon from '../../assets/back-icon.svg';
import avatar from '../../assets/avatar.svg';
import star from '../../assets/starIcon.svg';
import UserInfo from '../../components/dashboard/UserInfo';
import { assignBank, generateAccountNumber } from '../../components/utilities';

const UserDetails = () => {

  const [userDetails, setUserDetails] = useState()
  

  useEffect(() => {
    const getUserInfo = localStorage.getItem('userInfo')
    if (getUserInfo) {
      setUserDetails(JSON.parse(getUserInfo))
    }
  
  
  }, [])

   const Navigate = useNavigate();
  
  const navigateBack = () => {
    Navigate('/user-dashboard');
  } 
  return (
    <Fragment>
      <DashboardHeader />
      <div id='user-details'>
        <div className='user-details_wraper'>
          <div className='user-details_nav'>
            <div className='user-details_top-nav'>
              <button onClick={navigateBack} className='top-nav_back-btn'>
                <img src={backIcon} alt='' />
                <span>Back to Users</span>
              </button>
              <div className='top-nav_btn-wraper'>
                <h1>User Details</h1>
                <div className='top-nav_btn'>
                  <button className='blacklist_btn'>Blacklist User</button>
                  <button>Activate User</button>
                </div>
              </div>
              <div className='user-details_info-nav'>
                <div className='info-nav_wraper'>
                  <div className='info-nav_header'>
                    <div className='avatar_wraper'>
                      <img className='avatar' src={userDetails?.profile.avatar} alt='avatar' />
                    </div>
                    <div>
                      <h2>{`${userDetails?.profile.firstName}  ${userDetails?.profile.lastName} `}</h2>
                      <small className='user_code'>{userDetails?.accountNumber}</small>
                    </div>
                    <div className='info-nav_tier_wraper'>
                      <span>User's Tier</span>
                      <div className='info-nav_tier'>
                        <img src={star} alt='' />
                        <img src={star} alt='' />
                        <img src={star} alt='' />
                      </div>
                    </div>
                    <div>
                      <h2>₦{userDetails?.accountBalance}</h2>
                      <small className='user_bank'>{generateAccountNumber()}/{userDetails !== undefined && assignBank(userDetails.id)}</small>
                    </div>
                  </div>

                  <div className='info-nav_links'>
                    <a href='' className='active-link'>
                      General Details
                    </a>
                    <a href=''>Documents</a>
                    <a href=''>Bank Detial</a>
                    <a href=''>Loans</a>
                    <a href=''>Savings</a>
                    <a href=''>App and System</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <UserInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default UserDetails;
