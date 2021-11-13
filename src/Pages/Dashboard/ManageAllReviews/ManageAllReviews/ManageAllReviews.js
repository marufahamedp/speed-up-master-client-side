import { Button, Grid, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Review from "../Review/Review";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import useAuth from "../../../../hook/useAuth";
import ManageAllReview from "../ManageAllReview/ManageAllReview";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ManageAllReviews = () => {

    const [reviews, setReviews] = useState([]);
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://intense-sands-94991.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])


    return (
        <div>
             {
            reviews.map(review => <ManageAllReview
            key={review._id}
            review={review}
            ></ManageAllReview>)
        }
        </div>
    );
};

export default ManageAllReviews;