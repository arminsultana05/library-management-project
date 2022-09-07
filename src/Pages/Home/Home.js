import React from 'react';
import AllBooks from '../../Components/Banner/AllBooks/AllBooks';
import Banner from '../../Components/Banner/Banner';
import Gellery from '../../Components/Gellery/Gellery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBooks></AllBooks>
            <Gellery></Gellery>
        </div>
    );
};

export default Home;