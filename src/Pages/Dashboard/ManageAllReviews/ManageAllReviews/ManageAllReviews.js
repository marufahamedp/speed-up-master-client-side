import { Button, Grid, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hook/useAuth";
import ManageAllReview from "../ManageAllReview/ManageAllReview";


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
            <Typography sx={{my:3, textAlign:'center'}} variant="h4">
                       Total Rewiews:  {reviews.length}
                    </Typography>
             {
            reviews.map(reviewall => <ManageAllReview
            key={reviewall._id}
            reviewall={reviewall}
            ></ManageAllReview>)
        }
        </div>
    );
};

export default ManageAllReviews;