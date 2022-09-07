import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import AllBooks from '../../Components/Banner/AllBooks/AllBooks';
import Banner from '../../Components/Banner/Banner';
import Contact from '../../Components/Contact/Contact';
import Gellery from '../../Components/Gellery/Gellery';
import Review from '../../Components/Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <AllBooks></AllBooks>
            <Gellery></Gellery>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;