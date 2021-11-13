import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ManageAllReview = ({review}) => {
    const {name, email, photo, review, rating, _id} = review;
    return (
        <div>
            <Paper sx={{p:2}} elevation={3}>
                <Box>
                    <img style={{width:'50px', borderRadius:'100%'}} src={photo} alt="" />
                </Box>
            </Paper>
        </div>
    );
};

export default ManageAllReview;