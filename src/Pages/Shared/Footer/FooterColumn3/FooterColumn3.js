import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const FooterColumn3 = () => {
    return (
        <Box sx={{display:{md:'flex'}, justifyContent:{md: 'center'}}}>
            <Box>
            <Typography sx={{p:1, textAlign:{xs:'center', md:'start'}}} variant="h5">
                CONTACT US
            </Typography>
            <Box sx={{display:'flex', alignItems:'center', mb:2}}>
            <EmailIcon sx={{mr:1}} /> marufamdp@gmail.com
            </Box>
            <Box sx={{display:'flex', alignItems:'center', mb:2}}>
            <CallIcon sx={{mr:1}} /> (+880)1315560101
            </Box>
            <Box sx={{display:'flex', alignItems:'center', mb:2}}>
            <LocationOnIcon sx={{mr:1}} /> Jamgora, Ashulia, Dhaka, Bangladesh.
            </Box>
            </Box>
        </Box>
    );
};

export default FooterColumn3;