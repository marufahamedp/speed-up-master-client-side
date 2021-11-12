import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Review from "../Dashboard/Review/Review/Review";

const ReviewOnHome = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return (
        <div>
            <Container>
            <Box>
            <Typography sx={{textAlign: 'center', fontWeight: 600, my:5}} variant="h4">
            OUR REVIEWS
            </Typography>
            <Grid container spacing={2}>
            {
            reviews.map(areview => <Review
            key={areview._id}
            areview={areview}
            ></Review>)
        }
            </Grid>
            </Box>
            </Container>
        </div>
    );
};

export default ReviewOnHome;