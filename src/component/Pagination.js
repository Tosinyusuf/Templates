import React from 'react';
import arrow from "../assets/images/Vector.svg";
import './Pagination.css'


const Pagination = ( props ) => {

    const noPages = Math.ceil(props.totalCount / 12)
    console.log(props.totalCount);
    return (
      <div className="pager-wrapper">
            <button className={`previous ${props.currentPage === 1 ? 'disabled' : ''}`} onClick={() => props.onChange(props.currentPage - 1)}>Previous</button>
            <div>
                <p><span className='current-page'>{props.currentPage}</span> of {noPages}</p>
            </div>
        <button className={`next ${props.currentPage === noPages ? 'disabled' : ''}`} onClick={() => props.onChange(props.currentPage + 1)}>Next <span><img src={arrow} alt={ arrow}/></span></button>
      </div>
    );
  };
  
  export default Pagination;
