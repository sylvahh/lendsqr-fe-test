import React, { useEffect, useState } from 'react';
import { IUser } from '../utilities';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<IUser>()
  useEffect(() => {
    const getUserInfo = localStorage.getItem('userInfo')
    if (getUserInfo) {
      setUserInfo(JSON.parse(getUserInfo))
    }
  
  
  }, [])


  
  return (
    <div id='user-info'>
      <div className='user-info_wraper'>
        <h1>Personal Information</h1>
        <div className='user-info_section-wraper'>
          <div>
            <h1>full name</h1>
            <span>{`${userInfo?.profile.firstName}  ${userInfo?.profile.lastName} `}</span>
          </div>
          <div>
            <h1>Phone Number</h1>
            <span>{userInfo?.profile.phoneNumber}</span>
          </div>{' '}
          <div>
            <h1>Email Address</h1>
            <span>{ userInfo?.email}</span>
          </div>{' '}
          <div>
            <h1>Bvn</h1>
            <span>{userInfo?.profile.bvn}</span>
          </div>{' '}
          <div>
            <h1>gender</h1>
            <span>{userInfo?.profile.gender}</span>
          </div>{' '}
          <div>
            <h1>Marital status</h1>
            <span>Single </span>
          </div>{' '}
          <div>
            <h1>Children</h1>
            <span>none</span>
          </div>{' '}
          <div>
            <h1>Type of residence None</h1>
            <span>Parent’s Apartment</span>
          </div>
        </div>
        <hr />
        <h1>Education and Employment</h1>
        <div className='user-info_section-wraper'>
          <div>
            <h1> level of education</h1>
            <span>{userInfo?.education.level}</span>
          </div>{' '}
          <div>
            <h1>employment status </h1>
            <span>{userInfo?.education.employmentStatus}</span>
          </div>
          <div>
            <h1>sector of employment </h1>
            <span>{userInfo?.education.sector}</span>
          </div>{' '}
          <div>
            <h1> office email</h1>
            <span>{userInfo?.education.officeEmail}</span>
          </div>{' '}
          <div>
            <h1>Duration of employment </h1>
            <span>{userInfo?.education.duration}</span>
          </div>{' '}
          <div>
            <h1> Monthly income</h1>
            <span>₦{userInfo?.education.monthlyIncome[0]}- ₦{userInfo?.education.monthlyIncome[1]}</span>
          </div>{' '}
          <div>
            <h1> loan repayment</h1>
            <span>{userInfo?.education.loanRepayment} </span>
          </div>{' '}
        </div>
        <hr />
        <h1>socials</h1>
        <div className='user-info_section-wraper'>
          <div>
            <h1> Twitter</h1>
            <span> {userInfo?.socials.twitter} </span>
          </div>
          <div>
            <h1>Facebook </h1>
            <span>{userInfo?.socials.facebook} </span>
          </div>{' '}
          <div>
            <h1> Instagram</h1>
            <span>{userInfo?.socials.instagram} </span>
          </div>{' '}
        </div>
      <hr />
      <h1>Guarantor</h1>
      <div className='user-info_section-wraper'>
        <div>
          <h1>full Name </h1>
          <span>{userInfo?.guarantor.firstName} {userInfo?.guarantor.lastName}</span>
        </div>
        <div>
          <h1> Phone Number</h1>
          <span>{userInfo?.guarantor.phoneNumber}</span>
        </div>{' '}
        <div>
          <h1>Email Address </h1>
          <span>{userInfo?.guarantor.firstName}@gmail.com</span>
        </div>{' '}
        <div>
          <h1> Relationship</h1>
            <span>{` ${userInfo?.guarantor.gender.toLowerCase() === 'male' ? 'brother' : 'sister' }` }</span>
        </div>{' '}
      </div>

      <hr />
      <div className='user-info_section-wraper_g2'>
      <div>
          <h1>full Name </h1>
          <span>{userInfo?.guarantor.firstName} {userInfo?.guarantor.lastName}</span>
        </div>
        <div>
          <h1> Phone Number</h1>
          <span>{userInfo?.guarantor.phoneNumber}</span>
        </div>{' '}
        <div>
          <h1>Email Address </h1>
          <span>{userInfo?.guarantor.firstName}@gmail.com</span>
        </div>{' '}
        <div>
          <h1> Relationship</h1>
            <span>{` ${userInfo?.guarantor.gender.toLowerCase() === 'male' ? 'brother' : 'sister' }` }</span>
        </div>{' '}
      </div>
      </div>
    </div>
  );
};

export default UserInfo;
