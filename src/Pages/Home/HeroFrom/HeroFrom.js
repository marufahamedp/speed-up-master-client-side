import React from 'react';
import useAuth from '../../../hook/useAuth';
import { useForm } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
const HeroFrom = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {


    };
    return (
        <Box sx={{ width: "100%" }}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Name"

                    defaultValue={user.displayName}

                    sx={{ width: '100%', mb: 2 }}
                    {...register("email")}
                />
                <TextField
                    label="Email"

                    defaultValue={user.email}

                    sx={{ width: '100%', mb: 2 }}
                    {...register("email")}
                />
                <br />

                <FormControl fullWidth>

                    <InputLabel id="select">Age</InputLabel>
                    <Select
                        labelId="select"
                        id="select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ferrari F12 TRS</MenuItem>
                        <MenuItem value={20}>Ferrari 458 MM Special</MenuItem>
                        <MenuItem value={30}>Pininfarina Sergio</MenuItem>
                        <MenuItem value={40}>Pininfarina Sergio</MenuItem>
                        <MenuItem value={50}>Ferrari F12 TDF</MenuItem>
                        <MenuItem value={60}>Ferrari F60 America</MenuItem>
                        <MenuItem value={70}>Ferrari SP12 EC</MenuItem>
                        <MenuItem value={80}>Ferrari 365 GTB/4 Daytona</MenuItem>
                        <MenuItem value={90}>Ferrari 250 GT Spyder SWB</MenuItem>
                        <MenuItem value={100}>Ferrari 125 S</MenuItem>
                        <MenuItem value={110}>Ferrari 250 GTO</MenuItem>
                    </Select>



                </FormControl>

                <br />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ my: 2, width: "100%" }}
                    className="speedButton"
                >
                    Buy Now
                </Button>
            </form>
        </Box>
    );
};

export default HeroFrom;