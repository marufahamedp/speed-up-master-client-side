import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const FooterColumn2 = () => {
    return (
        <Box sx={{display:{md:'flex'}, justifyContent:{md: 'center'}}}>
        <Box>
        <Typography sx={{p:1, textAlign:{xs:'center', md:'start'}}} variant="h5">
            ABOUT US
        </Typography>
        <Typography sx={{p:1, textAlign:{xs:''}}}>
           We are providing hing class cars in lowest price.
           we mostly sell best cars like BMW, FARARI, AUDI, TESLA and so more.
        </Typography>
        </Box>
    </Box>
    );
};

export default FooterColumn2;