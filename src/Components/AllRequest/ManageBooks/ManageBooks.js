import React, { useEffect, useState } from 'react';
import SingleBook from '../../SingleBook/SingleBook';

const ManageBooks = () => {
    const [books, setAllBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setAllBooks(data))
        console.log(books);

    })
    return (
        <div className='mid-container mt-36' id='book'>
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
            
        </div>
    );
};

export default ManageBooks;