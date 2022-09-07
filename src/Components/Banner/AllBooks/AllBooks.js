import React, { useEffect, useState } from 'react';
import book1 from '../../../assets/images/book-1.png'
import book2 from '../../../assets/images/book-2.png'
import book3 from '../../../assets/images/book-3.png'
import book4 from '../../../assets/images/book-4.png'
import book5 from '../../../assets/images/book-5.png'
import book6 from '../../../assets/images/book-6.png'
import book7 from '../../../assets/images/book-7.png'
import book8 from '../../../assets/images/book-8.png'
import book9 from '../../../assets/images/book-9.png'
import SingleBook from '../../SingleBook/SingleBook';
import './AllBooks.css'

const AllBooks = () => {
    const [books, setAllBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setAllBooks(data))
        console.log(books);

    })

    return (
        <div className='mid-container mt-36'>
            <h1 className='text-4xl font-bold border-b-[1px] pb-3 mb-5'>All Books</h1>
            <div className="grid lg:grid-cols-4 mt-16 md:grid-cols-2 gap-4">
            {
              books.map(book=><SingleBook
              key={book.id}
              book={book}
              >

              </SingleBook>)
            }
            </div>

          {/* <div className="grid lg:grid-cols-4 mt-16 md:grid-cols-2 gap-3 ">
          <div class="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src={book1}alt="Shoes" /></figure>
                <div class="card-body">
               </div>
            </div>
          <div class="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src={book2}alt="Shoes" /></figure>
                <div class="card-body">
               </div>
            </div>
          <div class="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src={book3}alt="Shoes" /></figure>
                <div class="card-body">
               </div>
            </div>
          <div class="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src={book4}alt="Shoes" /></figure>
                <div class="card-body">
               </div>
            </div>
          <div class="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src={book5}alt="Shoes" /></figure>
                <div class="card-body">
               </div>
            </div>
          <div class="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src={book6}alt="Shoes" /></figure>
                <div class="card-body">
               </div>
            </div>
          <div class="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src={book7}alt="Shoes" /></figure>
                <div class="card-body">
               </div>
            </div>
          <div class="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src={book8}alt="Shoes" /></figure>
                <div class="card-body">
               </div>
            </div>
         
        
          </div> */}
        </div>
    );
};

export default AllBooks;