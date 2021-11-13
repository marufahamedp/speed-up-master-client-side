import { Typography } from '@mui/material';
import React from 'react';
import useCars from '../../hook/useCars';
import DisplayCars from '../Shared/DisplayCars/DisplayCars';
import Footer from '../Shared/Footer/Footer/Footer';
import MainHeader from '../Shared/Header/MainHeader/MainHeader';

const AllCars = () => {
    const { cars } = useCars();
    return (
        <div>
            <MainHeader></MainHeader>
            <Typography sx={{ my: 2, textAlign:'center', fontWeight: 600 }} variant="h3">
            OUER CARS
            </Typography>
            <DisplayCars
           cars={cars}
           ></DisplayCars>
           <Footer></Footer>
        </div>
    );
};

export default AllCars;