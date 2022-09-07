import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import AllBooks from '../../Components/Banner/AllBooks/AllBooks';
import Banner from '../../Components/Banner/Banner';
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
        </div>
    );
};

export default Home;