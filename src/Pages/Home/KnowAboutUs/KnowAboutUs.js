import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import React from 'react';
import bodybilder from '../../../images/zim5.jpg';
import './KnowAboutUs.css'
const KnowAboutUs = () => {
    return (
        <div>
            <Box sx={{color: 'white', backgroundColor:'black', my:10 }}>
                <Container  clssName="container-img">
                    <Grid container spacing={2}>
                        <Grid sx={{ p:5}} item xs={12} md={7}>
                            <Box>
                                <Typography  sx={{mb:3}} variant="body1">
                                    KNOW ABOUT US
                                </Typography>
                                <Typography sx={{ fontWeight: 600 }} variant="h4">
                                    WHAT IS FUNCTIONAL FITNESS
                                    ALL ABOUT
                                </Typography>
                                <Typography  sx={{mt:2}}  variant="body1">
                                    Our state of the art gyms provide you with a great place to work out in, whether you are there to burn off some calories or are.
                                </Typography>
                            </Box>

                                    
                            <Grid sx={{mt:4, borderTop:'1px solid white', pt:0}} container spacing={2}>
                                <Grid item xs={12} md={6}>
                                <Box sx={{p:2}}>
                                    <Box>
                                        <Typography variant="h5">
                                            WE HAVE PROFESSIONAL
                                            GYM TRAINER
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{my:1}} variant="body1">
                                            We are providing different services in this sector to wide area of world.
                                        </Typography>
                                        <Button variant="contained">Read More</Button>
                                    </Box>
                                </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                <Box sx={{p:2}}>
                                    <Box>
                                        <Typography variant="h5">

                                            MODERN GYM AND
                                            FITNESS FACILITIES
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{my:1}} variant="body1">
                                            We are providing different services in this sector to wide area of world.
                                        </Typography>
                                        <Button variant="contained">Read More</Button>
                                    </Box>
                                </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <Box sx={{display:{xs:'none', md:'block'}}}>
                        <img className="imghover bodybuilderimg" style={{width: '100%'}} src={bodybilder} alt="" />
                        </Box>
                        <Box sx={{display:{xs:'block', md:'none'}}}>
                        <img className="imghover" style={{width: '100%'}} src={bodybilder} alt="" />
                        </Box>
                        </Grid>

                    </Grid>
                    
                </Container>
            </Box>
        </div>
    );
};

export default KnowAboutUs;