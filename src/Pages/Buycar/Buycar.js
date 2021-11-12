import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import useSingleCar from '../../hook/useSingleCar';
import MainHeader from '../Shared/Header/MainHeader/MainHeader';
import ShopingCart from '../Shared/ShopingCart/ShopingCart';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Buycar = () => {


    const [open, setOpen] = React.useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const { car } = useSingleCar();
    const { user } = useAuth();

    const { carName, manufacturer, price, imageURL, carDetails, _id } = car;

    const [defaultValue, setDefaultValue] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://intense-sands-94991.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOpen(true);
                    reset()
                }

            })
    };

    useEffect(() => {
        setDefaultValue({ orderStatus: 'Pending', name: user.displayName, email: user.email, car: car._id })
    }, [car._id]);
    useEffect(() => {
        reset(defaultValue)
    }, [defaultValue]);




    return (
        <div>
            <MainHeader></MainHeader>
            <Container>
                <Box>
                    <Grid sx={{ mt: 2 }} container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box className="imghoverBox">
                                <img className="imghover" style={{ width: '100%' }} src={imageURL} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontWeight: 600, my: 3 }} variant="h4">
                                {carName}
                            </Typography>
                            <Typography sx={{ my: 1 }} variant="body1">
                                {carDetails}
                            </Typography>
                            <Typography sx={{ fontWeight: 600, my: 1 }} variant="h6">
                                Price: {price}
                            </Typography>
                        </Grid>

                    </Grid>
                </Box>
                <Grid sx={{ my: 2 }} container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Paper sx={{ p: 2 }} elevation={3}>
                            <Typography sx={{ fontWeight: 600, my: 3 }} variant="h5">
                                PERSONAL INFORMATION
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    label="Name"
                                    disabled
                                    defaultValue={user.displayName}
                                    size="small"
                                    sx={{ width: '100%', mb: 2 }}
                                    {...register("name")}
                                />
                                <TextField
                                    label="Email"
                                    disabled
                                    defaultValue={user.email}
                                    size="small"
                                    sx={{ width: '100%', mb: 2 }}
                                    {...register("email")}
                                />
                                <TextField
                                    label="Number"
                                    type="number"
                                    size="small"
                                    sx={{ width: '100%', mb: 2 }}
                                    {...register("number")}
                                />

                                <TextField
                                    label="Billing Address"
                                    type="text"
                                    size="small"
                                    sx={{ width: '100%', mb: 2 }}
                                    {...register("buillingaddress")}
                                />
                                <TextField
                                    label="Shipping Address"
                                    type="text"
                                    size="small"
                                    sx={{ width: '100%', mb: 2 }}
                                    {...register("shippingaddress")}
                                />
                                <Box sx={{ textAlign: 'end' }}>
                                    <Button  type="submit" variant="contained">Place Order</Button>
                                </Box>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <ShopingCart
                            key={car._id}
                            car={car}
                        ></ShopingCart>
                    </Grid>

                </Grid>
            </Container>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar  open={open} autoHideDuration={2000} onClose={handleClose}>
                       <Box>
                       <Alert onClose={handleClose} severity="success" sx={{ width: '100%', }}>
                            Order Successfully Placed
                        </Alert>
                       </Box>
                    </Snackbar>
                </Stack>
            </Box>
        </div>
    );
};

export default Buycar;