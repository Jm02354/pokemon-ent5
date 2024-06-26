import React from 'react';
import './styles/paginate.css'

const Paginate = ({ page, setPage, total }) => {
  
  const handleLess = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handlePlus = () => {
    if (page < total) {
      setPage(page + 1)
    }
  }
  
  return (
    <div className='paginate'>
      <button className='paginate__btn' onClick={handleLess}>Prev</button>
      <span>{page} / { total}</span>
      <button className='paginate__btn2' onClick={handlePlus}>Next</button>
    </div>
  )
}

export default Paginate;
