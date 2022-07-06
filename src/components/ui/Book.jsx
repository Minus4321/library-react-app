import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Book = () => {
  return (
    <div className="book">
      <a href=''>
        <figure className="book__img--wrapper">
          <img src="./assets" alt="" className="book__img" />
        </figure>
      </a>
      <div className="book__title"> 
        <a href="/" className='book__title--link'>
          Atomic Habits
        </a>
      </div>
      <div className="book___ratings">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" /> 
        <FontAwesomeIcon icon="star-half-alt" /> 
      </div>
      <div className="book__price">
        <span className="book__price--normal">$15.00</span>
        $10.00
      </div>
    </div>
  )
}

export default Book