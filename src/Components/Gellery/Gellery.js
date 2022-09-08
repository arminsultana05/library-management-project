import React from 'react';
import blog1 from '../../assets/images/blog-1.jpg'
import blog2 from '../../assets/images/blog-2.jpg'
import blog3 from '../../assets/images/blog-3.jpg'
import blog4 from '../../assets/images/blog-4.jpg'
import blog5 from '../../assets/images/blog-5.jpg'
import blog6 from '../../assets/images/blog-6.jpg'

const Gellery = () => {
    return (
        <section className="overflow-hidden text-gray-700 mt-20 " id='gellery'>
             <h1 className='text-4xl font-bold border-b-[1px] pb-3 mb-5 mid-container'>Gallery</h1>
                <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={blog1} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={blog2} />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={blog3} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={blog4}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={blog5}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={blog6} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Gellery;