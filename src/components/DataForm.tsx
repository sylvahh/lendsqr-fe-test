import React from 'react';
import { toggler } from './utilities';

const DataForm = () => {
  return (
    <div id='data-form'>
      <div className='data-form_wraper'>
        <form action=''>
          <div className='form-input_wraper'>
            <label htmlFor='organization'>organization</label>
            <select name='' id='organization'>
              <option value=''>lendsqr</option>
            </select>
          </div>
          <div className='form-input_wraper'>
            <label htmlFor='userName'>user name</label>
            <input type='text' name='userName' id='userName' placeholder='User' />
          </div>
          <div className='form-input_wraper'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' placeholder='email' />
          </div>
          <div className='form-input_wraper'>
            <label htmlFor='date'>Date</label>
            <input type='date' name='date' id='date' placeholder='Date' />
          </div>
          <div className='form-input_wraper'>
            <label htmlFor='phoneNumeber'>phone number</label>
            <input type='text' name='phoneNumber' id='phoneNumebr' placeholder='Phone Number' />
          </div>
          <div className='form-input_wraper'>
            <label htmlFor='status'>status</label>
            <select name='status' id='status'>
              <option value=''>active</option>
              <option value=''>inactive</option>
              <option value=''>pending</option>
              <option value=''>blacklisted</option>
            </select>
          </div>

          <div className='data-form_btn'>
            <button className='reset_btn'>reset</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggler('data-form', 'none');
              }}
            >
              filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataForm;
