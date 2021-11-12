import React from 'react';
import { Typography,TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const FooterColumn4 = () => {
    return (
        <Box sx={{display:{md:'flex'}, justifyContent:{md: 'center'}}}>
            <Box>
            <Typography sx={{p:1, textAlign:{xs:'center'}}} variant="h5">
                FOLLOW US
            </Typography>
            <Typography sx={{p:1, textAlign:{xs:'center', display:'flex', alignItems:'center'}}} variant="h6">
                <FacebookIcon style={{fontSize:'30', marginRight:'2px'}} /> <a style={{textDecoration:'none', color:'white'}} href="#" target="_blank">FaceBook</a>
            </Typography> 
            <Typography sx={{p:1, textAlign:{xs:'center', display:'flex', alignItems:'center'}}} variant="h6">
                <LinkedInIcon style={{fontSize:'30', marginRight:'2px'}} /> <a style={{textDecoration:'none', color:'white'}} href="#" target="_blank">Linkedin</a>
            </Typography> 
            <Typography sx={{p:1, textAlign:{xs:'center', display:'flex', alignItems:'center'}}} variant="h6">
                <InstagramIcon style={{fontSize:'30', marginRight:'2px'}} /> <a style={{textDecoration:'none', color:'white'}} href="#" target="_blank">Instagram</a>
            </Typography> 
            
            </Box>
        </Box>
    );
};

export default FooterColumn4;