import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/cars', data)
        .then(res => {
                alert('data inserted');
                reset()
        })
        console.log(data)
    };
    return (
        <div>
             <Typography sx={{textAlign:'center', fontWeight:600}} variant="h4">
                        ADD A NEW PRODUCT
                    </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Car Name"
                    variant="standard"
                    {...register("carName")}
                    sx={{ width: 1, mb: 2 }}
                />
                <TextField
                    label="Manufacturer"
                    variant="standard"
                    {...register("manufacturer")}
                    sx={{ width: 1, mb: 2 }}
                />
                <TextField
                    label="Price"
                    variant="standard"
                    {...register("price")}
                    sx={{ width: 1, mb: 2 }}
                />
                <TextField
                    label="Car Image URL"
                    variant="standard"
                    {...register("imageURL")}
                    sx={{ width: 1, mb: 2 }}
                />
                <TextField
                    label="Car Details"
                    multiline
                    rows={5}
                    {...register("carDetails")}
                    sx={{ width: 1, mb: 2 }}
                />

                <Box sx={{ textAlign: 'end' }}>
                    <Button type="submit" variant="contained">Add Member</Button>
                </Box>
            </form>
        </div>
    );
};

export default AddAProduct;