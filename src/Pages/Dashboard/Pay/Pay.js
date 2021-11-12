import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Pay = () => {
    return (
        <div>
            <Box sx={{display:'flex', justifyContent:'center'}}>
            <Paper elevation={5} sx={{display:'inline-block', p:5}} >
                <Typography variant="h4" sx={{fontWeight:600, textAlign:'center'}}>
                    Payment Method Is Comming Soon
                </Typography>
            </Paper>
            </Box>
        </div>
    );
};

export default Pay;