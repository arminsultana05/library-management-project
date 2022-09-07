import React from 'react';
import './SingleBook.css'

const SingleBook = ({book}) => {
   const {id, img}=book;
    return (
        <div className='card'>
             <div class="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src={img}alt="Shoes" /></figure>
                <div class="card-body">
               </div>
            </div>
            <div className="info">
                <button className=''>Request book</button>
            </div>
            
        </div>
    );
};

export default SingleBook;