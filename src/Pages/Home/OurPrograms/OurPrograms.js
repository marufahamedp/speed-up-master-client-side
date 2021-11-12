import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bmw from '../../../images/bmw.jpg'
import mercedesbenz from '../../../images/mercedesbenz.jpg'
import audi from '../../../images/audi.jpg'
import ferrari from '../../../images/ferrari.jpg'
import './OurPrograms.css'
const OurPrograms = () => {
    return (
        <div>
            <Typography sx={{ my: 2, textAlign:'center', fontWeight: 600 }} variant="h3">
            TOP CAR BRANDS IN THE WORLD
            </Typography>
            <Typography sx={{ mb: 4, textAlign:'center' }} variant="body1">
            The online popularity of the best luxury car brands in the world is a reliable predictor of future sales and the trends that  <br /> are shaping the global automobile industry. 
            </Typography>
            <Grid container >
                <Grid item xs={12} md={3} >
                    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ p: 3}}>
                            <Box>
                                <Typography sx={{ mb: 1, fontWeight: 600 }} variant="h4">
                                BMW
                                </Typography>
                                <Typography sx={{ mb: 2 }} variant="body2">
                                Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.
                                </Typography>
                                <a href="https://www.bmw.com/en/index.html" target="_blank" style={{textDecoration:'none'}}><Button variant="contained">Read More</Button></a>
                            </Box>
                        </Box>
                    </div>
                </Grid>
                <Grid sx={{ overflow: 'hidden',}} item xs={12} md={3} style={{ width: '100%' }} >
                    <Box style={{ height: '100%' }}>
                        <img className="imgs" style={{ width: '100%' }} src={bmw} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} >
                    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ p: 3 }}>
                            <Box>
                                <Typography sx={{ mb: 1, fontWeight: 600 }} variant="h4">
                                Mercedes-Benz
                                </Typography>
                                <Typography sx={{ mb: 2 }} variant="body2">
                                Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive marque. Mercedes-Benz and subsidiary Mercedes-Benz AG – of Daimler AG – are headquartered 
                                </Typography>
                                <a href="https://www.mbusa.com/en/home" target="_blank" style={{textDecoration:'none'}}><Button variant="contained">Read More</Button></a>
                            </Box>
                        </Box>
                    </div>
                </Grid>
                <Grid sx={{ overflow: 'hidden'}} item xs={12} md={3}>
                    <img className="imgs" style={{ width: '100%' }} src={mercedesbenz} />
                </Grid>
            </Grid>
            <Grid container >
            <Grid sx={{ overflow: 'hidden' }} item xs={12} md={3}>
                    <img className="imgs" style={{ width: '100%' }} src={audi} />
                </Grid>
                <Grid item xs={12} md={3} >
                    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ p: 3 }}>
                            <Box>
                                <Typography sx={{ mb: 1, fontWeight: 600 }} variant="h4">
                                Audi
                                </Typography>
                                <Typography sx={{ mb: 2 }} variant="body2">
                                Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company
                                </Typography>
                                <a href="https://www.audi.com/en.html" target="_blank" style={{textDecoration:'none'}}><Button variant="contained">Read More</Button></a>
                            </Box>
                        </Box>
                    </div>
                </Grid>
                <Grid sx={{ overflow: 'hidden' }} item xs={12} md={3}>
                    <img className="imgs" style={{ width: '100%' }} src={ferrari} />
                </Grid>
                <Grid item xs={12} md={3} sx={{}} >
                    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ p: 3 }}>
                            <Box>
                                <Typography sx={{ mb: 1, fontWeight: 600 }} variant="h4">
                                Ferrari
                                </Typography>
                                <Typography sx={{ mb: 2 }} variant="body2">
                                Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 out of the Alfa Romeo race division as Auto Avio Costruzioni, the company built its first car in 1940, 
                                </Typography>
                                <a href="https://www.ferrari.com/en-EN" target="_blank" style={{textDecoration:'none'}}><Button variant="contained">Read More</Button></a>
                            </Box>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default OurPrograms;