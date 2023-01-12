import React, { Fragment } from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import backIcon from  '../../assets/back-icon.svg'
import avatar from '../../assets/avatar.svg'
import star from  '../../assets/starIcon.svg'
import UserInfo from '../../components/UserInfo'


const UserDetails = () => {
  return (
      <Fragment >
          <DashboardHeader />
          <div id="user-details">
              
              <div className="user-details_wraper">
                  <div className="user-details_nav">
                      <div className="user-details_top-nav">
                          <button className="top-nav_back-btn">
                              <img src={backIcon} alt="" />
                              <span>Back to Users</span>
                          </button>
                          <div className="top-nav_btn-wraper">
                                  <h1>User Details</h1>
                              <div className='top-nav_btn'>
                              <button className='blacklist_btn'>Blacklist User</button>
                              <button>Activate User</button>
                              </div> 
                          </div>
                          <div className="user-details_info-nav">
                              <div className="info-nav_wraper">
                                  <div className="info-nav_header">
                                      <div className='avatar_wraper'>
                                          
                                      <img className='avatar' src={avatar} alt="avatar" />
                                      </div>
                                      <div >
                                          <h2>Grace Effiom</h2>
                                            <small className='user_code'>LSQFf587g90</small>
                                      </div>
                                      <div className='info-nav_tier_wraper'>
                                          <span>
                                              User's Tier
                                          </span>
                                          <div className='info-nav_tier'>
                                              
                                              <img src={star} alt="" />
                                          <img src={star} alt="" />
                                          <img src={star} alt="" />
                                              
                                          </div>
                                      </div>
                                      <div>
                                      <h2>₦200,000.00</h2>
                                            <small className='user_bank'>9912345678/Providus Bank</small>
                                      </div>
                                  </div>

                                  <div className="info-nav_links">
                                      <a href="" className='active-link'>General Details</a>
                                      <a href="">Documents</a>
                                      <a href="">Bank Detial</a>
                                      <a href="">Loans</a>
                                      <a href="">Savings</a>
                                      <a href="">App and System</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <UserInfo/>
              </div>
          </div>
    </Fragment>
  )
}

export default UserDetails