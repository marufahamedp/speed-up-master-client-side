import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const FooterColumn2 = () => {
    return (
        <Box sx={{display:{md:'flex'}, justifyContent:{md: 'center'}}}>
        <Box>
        <Typography sx={{p:1, textAlign:{xs:'center'}}} variant="h5">
            RESENT SERVICES
        </Typography>
        </Box>
    </Box>
    );
};

export default FooterColumn2;