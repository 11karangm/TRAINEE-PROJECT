import React from 'react'

const Pagination = ({paginate}) => {

    const pageNumbers = [];
    for(let i =1;i<= Math.ceil(40/5);i++){
        pageNumbers.push(i);
    }

  return (
    <nav>
    <ul>
        {pageNumbers.map(number =>(
            <li key={number} className="page-item">
                <a onClick={()=>paginate(number)} href="#" className='page-link'>
                    {number}
                </a>
            </li>
        ))}
    </ul>
  
</nav>
  

  )
}

export default Pagination
