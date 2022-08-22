import React from 'react'
import { useParams } from 'react-router-dom';

const Pagination = ({paginate}) => {

    const params = useParams();
    const pageNumbers = []
    for(let i =0;i<Math.ceil(40/5);i++){
        pageNumbers.push(i+1);
    }
  return (
    <nav className='old'>
        <ul  className='pages-list'>
            {pageNumbers.map(number =>(
                <li key={number} className="page-item">
                    
                    <a onClick={()=>paginate(number)} href={`${number}`} className='page-link' >
                    {number}
                    </a>
                    
                </li>
            ))}
        </ul>
      
    </nav>
  )
}

export default Pagination
