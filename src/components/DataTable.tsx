import React from 'react';
import filterIcon from '../assets/filter-button.png';

import optionIcon from '../assets/options.svg';
import nextbtn from '../assets/next btn.png';
import prevbtn from '../assets/prev btn.png';
import DataForm from './DataForm';
import TableOptions from './TableOptions';

const DataTable = () => {
  return (
    <div id='data_table'>
          <div className='table_wraper'>
              <DataForm />
              {/* <TableOptions/> */}
        <table>
          <tr>
            <th>organization <button><img src={filterIcon} alt="filter_icon"/></button></th>
            <th>Username <button><img src={filterIcon} alt="filter_icon"/></button></th>
                      <th>Email <button><img src={filterIcon} alt="filter_icon"/></button></th>
                      <th> Phone number <button><img src={filterIcon} alt="filter_icon"/></button></th>
                      <th>Date joined <button><img src={filterIcon} alt="filter_icon"/></button></th>
                      <th>Status <button><img src={filterIcon} alt="filter_icon" /></button></th>
                      {/* <th> hh</th> */}
          </tr>
                  <tr className='table_data'>
                      
            <td><button>Lendsqr</button></td>
            <td><button>Adedeji</button></td>
             <td><button>adedeji@lendsqr.com</button></td>
              <td><button>08078903721</button></td>
            <td><button>May 15, 2020 10:00 AM</button></td>
                      <td><button className='status_inactive'>Inactive  </button></td>
                      <td className='option-cell'><button className='option_btn'><img src={optionIcon} alt="" /> </button> <TableOptions/> </td>
                      
                      {/* <hr /> */}
                  </tr>
                  
                  <tr>
                      
                      <td><button>Lendsqr</button></td>
                      <td><button>Adedeji</button></td>
                       <td><button>adedeji@lendsqr.com</button></td>
                        <td><button>08078903721</button></td>
                      <td><button>May 15, 2020 10:00 AM</button></td>
                                <td><button className='status_blacklist'>blacklisted </button> </td>
                                <td><button className='option_btn'><img src={optionIcon} alt="" /></button> </td>
                    </tr>
         
              </table>
              
              <div className="td_pigment">
                  <div>
                      <span>Showing </span>
                      <select name="" id="">
                          <option value="">
                              10
                          </option>
                          <option value="">
                              25
                          </option>
                          <option value="">
                              50
                          </option>
                          <option value="">
                              100
                          </option>
                      </select>
                      <span>out of 100</span>
                  </div>

                  <div>
                      <button>
                          
                      <img src={prevbtn} alt="" />
                      </button>

                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <button>
                          <img src={nextbtn} alt="" />
                      </button>
                  </div>
              </div>

        {/* <div className='table_headers'>
          <span>organization <button><img src={filterIcon} alt="filter_icon"/></button></span>
          <span>Username <button><img src={filterIcon} alt="filter_icon"/></button></span>
          <span>Email <button><img src={filterIcon} alt="filter_icon"/></button></span>
          <span> Phone number <button><img src={filterIcon} alt="filter_icon"/></button></span>
          <span>Date joined <button><img src={filterIcon} alt="filter_icon"/></button></span>
          <span>Status <button><img src={filterIcon} alt="filter_icon"/></button></span>
        </div>
        <div className='table_data_wraper'>
          <button className='table_data'>
            <span>Lendsqr</span>
            <span>Adedeji</span>
            <span>adedeji@lendsqr.com</span>
            <span>08078903721</span>
            <span>May 15, 2020 10:00 AM</span>
            <span>Inactive</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DataTable;
