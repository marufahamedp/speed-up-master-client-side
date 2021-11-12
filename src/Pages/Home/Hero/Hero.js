import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import bannerBackground from '../../../images/heroBanner.jpg';
import './Hero.css'
const Hero = () => {
    const herobg = {
        backgroundImage: `url(${bannerBackground})`,
    }
    return (
        <div>
            <Box className="hero-Container">
                <Box>
                    <img className="hero-img" src={bannerBackground} alt="" />
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' },color:'white' }}  className="hero-contain">
            <Typography sx={{fontWeight:600}} variant="h3">
                Now it's easy for you to buy a car
            </Typography>
            <Typography sx={{my:1}} variant="body1">
               100 luxury cars from multi brands are always available for you.
            </Typography>
                <Link style={{textDecoration:'none'}} to="/allcars">
                <Button variant="contained">Explore Now</Button>
                </Link>
                
                </Box>
                 <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' }}} style={{marginTop:'-140px', position:'absolute', textAlign:'center', color:'white'}}>
            <Typography variant="h6">
                Now it's easy for you to buy a car
            </Typography>
            <Typography sx={{my:1}} variant="body2">
               100 luxury cars from multi brands are always available for you.
            </Typography>
            <Link style={{textDecoration:'none'}} to="/allcars">
                <Button variant="contained">Explore Now</Button>
                </Link>
                </Box>
            </Box>
        </div>
    );
};

export default Hero;