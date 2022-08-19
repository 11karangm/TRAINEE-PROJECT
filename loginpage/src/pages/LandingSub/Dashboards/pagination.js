import React from 'react'

const Pagination = ({totalPages,postPerPage,paginate}) => {

    const pageNumbers = []
    for(let i =0;i<Math.ceil(totalPages/postPerPage);i++){
        pageNumbers.push(i+1);
    }
  return (
    <nav className='old'>
        <ul  className='pages-list'>
            {pageNumbers.map(number =>(
                <li key={number} className="page-item">
                    <a onClick={()=>paginate(number)} href="#/landing/Dashboard" className='page-link' >
                    {number}
                    </a>
                    
                </li>
            ))}
        </ul>
      
    </nav>
  )
}

export default Pagination
