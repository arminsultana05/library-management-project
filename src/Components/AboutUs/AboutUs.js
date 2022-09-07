import React from 'react';
import photo from '../../assets/images/about.png'

const AboutUs = () => {
    return (
        <div className='mid-container'>
             <h1 className='text-4xl font-bold border-b-[1px] pb-3   mt-20'>About Us</h1>
            <div class="hero mt-20 ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                  
                    <div className='h-96 ml-9'>
                        <h1 class="text-2xl font-bold">About Our Library Management System!</h1>
                        <p class="py-6 ">Library Management system helps in maintaining data of books issued to learners and books available in the library. This helps librarians spot any particular book at any given time in the library. The ERP for library management systems can be easily customized as per individuals' requirements.A college library management is a project that manages and stores books information electronically according to students needs. The system helps both students and library manager to keep a constant track of all the books available in the library. It allows both the admin and the student to search for the desired book ...</p>
                        <button class="btn btn-outline btn-error">Explore More</button>
                    </div>
                    <img src={photo} class=" h-96 rounded-lg shadow-2xl" />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;