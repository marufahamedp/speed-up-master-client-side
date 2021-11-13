import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import React from 'react';
import ferrari from '../../../images/ferrari.jpg';
import './KnowAboutUs.css'
const KnowAboutUs = () => {
    return (
        <div>
            <Box sx={{ my: 10 }}>
                <Container clssName="container-img">
                    <Grid container spacing={2}>
                    
                   
                        <Grid sx={{ p: 5 }} item xs={12} md={6}>
                            <Box>
                                <Typography sx={{ mb: 3 }} variant="body1">
                                    CONTACT US
                                </Typography>
                                <Typography sx={{ fontWeight: 600 }} variant="h4">
                                    HOW CAN YOU FIND US?
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant="body1">
                                    PHONE: (+880) 1315560101
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant="body1">
                                    EMAIL: marufamdp@gmail.com
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant="body1">
                                    ADDRESS: jamgora, Ashulia, Savar, Dhaka.
                                </Typography>
                            </Box>

                            </Grid>
                     
                        <Grid item xs={12} md={6}>
                                    <Box sx={{ p: 2 }}>
                                        <TextField
                                            label="Name"
                                            variant="standard"
                                            sx={{ width: '100%', mb:2 }}
                                        />
                                        <TextField
                                            label="Email"
                                            variant="standard"
                                            sx={{ width: '100%', mb:4 }}
                                        />
                        
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Message"
                                            multiline
                                            rows={4}
                                            sx={{ width: '100%', mb:2 }}
                                        />
                                        <Box sx={{textAlign:'end'}}>
                                        <Button variant="contained">Send Message</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default KnowAboutUs;