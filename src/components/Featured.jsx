import React from 'react'
import Book from './ui/Book'
import {books} from '../data.js'

const Featured = () => {
  function getFiveStarBooks() {
    console.log(books.filter((book) => book.rating === 5));

  } 
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className='purple'>Books</span>
          </h2>
          <div className="books">
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured