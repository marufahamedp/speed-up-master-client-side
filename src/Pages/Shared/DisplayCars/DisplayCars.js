import { Container, Grid } from '@mui/material';
import React from 'react';
import DisplayCar from '../DisplayCar/DisplayCar';

const DisplayCars = ({cars}) => {
    return (
        <div>
           <Container sx={{my:5}}>
           <Grid container spacing={2}>
                {
                    cars?.map(car=> <DisplayCar
                    key={car._id}
                    car={car}
                    ></DisplayCar>)
                }

            </Grid>
           </Container>
        </div>
    );
};

export default DisplayCars;