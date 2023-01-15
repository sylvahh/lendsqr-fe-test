import { useState } from 'react';
import nextbtn from '../../assets/next btn.png';
import prevbtn from '../../assets/prev btn.png';
import { paginate } from '../utilities';

const Pagination = (props) => {
    const {currentPage, setCurrentPage, dataPerPage, setDataPerPage, paginatedData,} = props;

    
    const totalPages = paginatedData !== null && paginatedData.length;
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    const displayedPageNumbers = pageNumbers.slice(Math.max(0, currentPage - 2), Math.min(pageNumbers.length, currentPage + 3));
    
    if (!paginatedData) {
        return <div>An error occurred while paginating the data.</div>;
    }


    return (
        <div className='td_pigment' >
            <div className='td_pigment_showing'>
                <div>

            <span>Showing</span>
            <select value={dataPerPage} onChange={e => setDataPerPage(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
                </select>
                </div>
                <span>out of 100</span>
            </div>

            <div className='td_pigment_pages'>

            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}> <img src={prevbtn} alt='' /></button>

            <ul>
            {displayedPageNumbers.map((pageNumber, index) => {
                if (index === 2 && currentPage > 2 && currentPage < totalPages - 2)
                    return <span key={pageNumber}>...</span>
                    const isActive = pageNumber === currentPage + 1;
                return <button style={{backgroundColor: isActive  ? '#21137d12': 'white'}} key={pageNumber} onClick={() => setCurrentPage(pageNumber - 1)}>{pageNumber}</button>
            })}
              
            </ul>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === paginatedData.length - 1}> <img src={nextbtn} alt='' /> </button>

                </div>
        </div>
    );
}

export default Pagination

          