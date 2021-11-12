import { Typography } from '@mui/material';
import React from 'react';
import useCars from '../../../hook/useCars';
import ReviewOnHome from '../../ReviewOnHome/ReviewOnHome';
import DisplayCars from '../../Shared/DisplayCars/DisplayCars';
import Footer from '../../Shared/Footer/Footer/Footer';
import MainHeader from '../../Shared/Header/MainHeader/MainHeader';
import TextEditor from '../../Shared/TextEditor/TextEditor';
import Hero from '../Hero/Hero';
import KnowAboutUs from '../KnowAboutUs/KnowAboutUs';
import OurPrograms from '../OurPrograms/OurPrograms';
import Tips from '../Tips/Tips';
import './Home.css'
const Home = () => {
    const { cars } = useCars();
    const homepageCars = cars.slice(0, 6);
    return (
        <div>
           <MainHeader></MainHeader>
           <Hero></Hero>
           <Typography sx={{ my: 2, textAlign:'center', fontWeight: 600 }} variant="h3">
            OUR BEST CARS
            </Typography>
           <DisplayCars
           cars={homepageCars}
           ></DisplayCars>    
           <OurPrograms></OurPrograms>
           <ReviewOnHome></ReviewOnHome>
            <Footer></Footer>
        </div>
    );
};

export default Home;