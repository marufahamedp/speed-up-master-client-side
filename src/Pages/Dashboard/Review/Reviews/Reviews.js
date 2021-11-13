import { Button, Grid, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hook/useAuth";
import Review from "../Review/Review";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Reviews = () => {

    
    const [open, setOpen] = React.useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const [defaultValue, setDefaultValue] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://intense-sands-94991.herokuapp.com/reviews', {
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
        setDefaultValue({ name: user.displayName, email: user.email, photo: user.photoURL })
    }, []);
    useEffect(() => {
        reset(defaultValue)
    }, [defaultValue]);


    const [reviews, setReviews] = useState([]);
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://intense-sands-94991.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    const filterReviews = reviews.filter(review => review.email == user?.email)


    return (
        <div>

            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', mb: 10 }} >


                <Grid item xs={12} md={6}>
                    <Typography sx={{ textAlign: 'center', fontWeight: 600 }} variant="h4">
                        ADD A REVIEW
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Write a review"
                            variant="standard"
                            {...register("review")}
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            label="Write a rating out of 5"
                            variant="standard"
                            type="number"
                            {...register("rating")}
                            sx={{ width: 1, mb: 2 }}
                        />

                        <Box sx={{ textAlign: 'end' }}>
                            <Button type="submit" variant="contained">Add Member</Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
            <Box>
            <Typography sx={{textAlign: 'center', fontWeight: 600, mb:3}} variant="h4">
            YOUR REVIEW
            </Typography>
            <Grid container spacing={2}>
            {
            filterReviews.map(areview => <Review
            key={areview._id}
            areview={areview}
            ></Review>)
        }
            </Grid>
            </Box>
            <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar  open={open} autoHideDuration={2000} onClose={handleClose}>
                       <Box>
                       <Alert onClose={handleClose} severity="success" sx={{ width: '100%', }}>
                            Successfully reviewed this site
                        </Alert>
                       </Box>
                    </Snackbar>
                </Stack>
       
        </div>
    );
};

export default Reviews;