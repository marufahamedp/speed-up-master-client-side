import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
const Review = ({areview}) => {
    const {name, email, photo, review, rating, _id} = areview;
    return (
        
            
  <Grid item xs={12} md={4}>
  <Paper sx={{p:3, mb:2}} elevation={3}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <img src={photo} style={{width:'50px', height:'50px', borderRadius:'100%'}} />
                    <Typography variant="h6"  sx={{my:2, ml:1, textAlign:'end'}}>
                {name}
                </Typography>
                </Box>
                <Typography  style={{margin:'10px 0 ', fontSize: 20, fontWeight:350, fontStyle:'italic'}}>
                
                    "
                    {review}
                    "
                </Typography>
                
                <Rating sx={{}} name="half-rating-read" defaultValue={rating} precision={0.5} readOnly size="large" />
            </Paper>
  </Grid>
            
        
    );
};

export default Review;