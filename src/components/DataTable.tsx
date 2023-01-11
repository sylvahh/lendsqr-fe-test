import React from 'react';
import filterIcon from '../assets/filter-button.png';

import optionIcon from '../assets/options.svg';
import nextbtn from '../assets/next btn.png';
import prevbtn from '../assets/prev btn.png';
import DataForm from './DataForm';
import TableOptions from './TableOptions';
import { toggler } from './utilities';

const DataTable = () => {
    let tableOptions = document.getElementById('table-options') as HTMLDivElement;
    const checkDisplay = (): void  => {
        // toggler('table-options', 'block')
        // tableOptions === 'block' && tableOptions = 'none'
        if (tableOptions !== null) {
            tableOptions.classList.toggle('open_options')
        }
        // else if (tableOptions !== null && tableOptions.style.display === 'block') {
        //     tableOptions.style.display = 'none';
        // }

        // if (tableOptions !== null) {
        //     if (tableOptions.style.display !== 'block') {
        //         console.log('no')
        //         console.log(tableOptions.style.display)
        //     }
        // }

    }
    
    // console.log(tableOptions?.style.display)
   
  return (
    <div id='data_table'>
          <div className='table_wraper'>
              <DataForm />
              {/* <TableOptions/> */}
        <table>
          <tr>
            <th>organization <button  onClick={() => toggler('data-form', 'block')} ><img src={filterIcon} alt="filter_icon"/></button></th>
            <th>Username <button  onClick={() => toggler('data-form', 'block')} ><img src={filterIcon} alt="filter_icon"/></button></th>
                      <th>Email <button  onClick={() => toggler('data-form', 'block')}><img src={filterIcon} alt="filter_icon"/></button></th>
                      <th> Phone number <button  onClick={() => toggler('data-form', 'block')}><img src={filterIcon} alt="filter_icon"/></button></th>
                      <th>Date joined <button  onClick={() => toggler('data-form', 'block')}><img src={filterIcon} alt="filter_icon"/></button></th>
                      <th>Status <button  onClick={() => toggler('data-form', 'block')}><img src={filterIcon} alt="filter_icon" /></button></th>
                      {/* <th> hh</th> */}
          </tr>
                  <tr className='table_data'>
                      
            <td><button>Lendsqr</button></td>
            <td><button>Adedeji</button></td>
             <td><button>adedeji@lendsqr.com</button></td>
              <td><button>08078903721</button></td>
            <td><button>May 15, 2020 10:00 AM</button></td>
                      <td><button className='status_inactive'>Inactive  </button></td>
                      <td className='option-cell'><button onClick={ () => toggler('table-options', 'block') } className='option_btn close_option'><img src={optionIcon} alt="" /> </button> <TableOptions/> </td>
                      
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
              
              

    
          </div>
          <div className="td_pigment">
                  <div  className='td_pigment_showing'>
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
                  </div>     
                      <span>out of 100</span>
                  </div>

                  <div className='td_pigment_pages'>
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
    </div>
  );
};

export default DataTable;
