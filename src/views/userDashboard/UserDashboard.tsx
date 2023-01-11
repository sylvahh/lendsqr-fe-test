import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import DataTable from '../../components/DataTable';
import { numberWithCommas, usersCardData } from '../../components/utilities';

const UserDashboard = () => {
  return (
    <>
      <DashboardHeader />

      <div id='dashboard_body'>
        <div className='dashboard_content'>
          <h1>Users</h1>
          <div className='users_card'>
            {usersCardData.map((data) => {
              return (
                <div key={data.id} className='card_wraper'>
                 <div className={'icon_wraper'+ data.id}> <img src={data.icon} alt='' /></div>
                  <span className='card_title'>{data.title}</span>
                  <h3 className='card_numbers'> {numberWithCommas(data.amount)}</h3>
                </div>
              );
            })}
          </div>
          
          <DataTable/>
        </div>
      </div>
    </>
    // </body>
  );
};

export default UserDashboard;
