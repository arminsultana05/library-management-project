import React from 'react';

const Faq = () => {
    return (
        <div className= 'mid-container'>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div class="collapse-title text-xl font-medium bg-base-200">
                    About Our Library Management System !!!
                </div>
                <div class="collapse-content">
                    <p>A library management system is software that is designed to manage all the functions of a library. It helps librarian to maintain the database of new books and the books that are borrowed by members along with their due dates. This system completely automates all your library's activities.</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div class="collapse-title text-xl font-medium bg-base-200">
                What are the rules to follow when attempting to borrow books from the library?
                </div>
                <div class="collapse-content">
                    
                    <ul>
                        <li>
                        Carry out a library search. Is the item available? If not, click here to find out how to reserve an item. ...
                        </li>
                        <li>Locate on the shelves. Use library signage and floor plans to navigate your way around the library to find where items with the call number/classmark are located. ...</li>
                        <li>Borrow the book.</li>
                    </ul>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
                <div class="collapse-title text-xl font-medium bg-base-200">
                What are the rules to be followed in a library?
                </div>
                <div class="collapse-content">
                    
                    <ul>
                        <li>
                        Strict silence, decorum and discipline must be maintained in the library. ...
                        </li>
                        <li>Smoking, eating, sleeping and talking loudly are strictly prohibited in the library.</li>
                        <li>Documents taken out of the shelves must be left on the table..</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Faq;