import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import tips1 from '../../../images/tips1.jpg'
import tips2 from '../../../images/tips2.png'
const Tips = () => {
    return (
        <div>
            <Container sx={{mt:19}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box className="imghoverBox">
                            <img className="imghover" style={{width:'100%'}} src="https://i.ibb.co/frTQfYP/team2.jpg" alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box>
                            <Typography sx={{ my: 2, fontWeight: 400, opacity:'0.1' }} variant="h1">
                                01
                            </Typography>
                            <Typography sx={{ my: 2, fontWeight: 600 }} variant="h3">
                                JANVI - CEO & FOUNDER
                            </Typography>
                            <Typography sx={{ my: 2 }} variant="body1">
                            Prepare for your first half-marathon or run another one easily with our personalized running programs. Try our strength exercises for runners.
                            </Typography>
                            <Button variant="contained">Read More</Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{order:{xs:'1', md:'0'}}} >
                        <Box sx={{height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                            <Box>
                            <Typography sx={{ my: 2, fontWeight: 400, opacity:'0.1', textAlign:'end' }} variant="h1">
                                02
                            </Typography>
                            <Typography sx={{ my: 2, fontWeight: 600, textAlign:'end' }} variant="h3">
                            SOFIA - CEO & FOUNDER
                            </Typography>
                            <Typography sx={{ my: 2, textAlign:'end' }} variant="body1">
                            Prepare for your first half-marathon or run another one easily with our personalized running programs. Try our strength exercises for runners.
                            </Typography>
                            <Box sx={{textAlign:'end'}}>
                            <Button variant="contained">Read More</Button>
                            </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className="imghoverBox">
                            <img className="imghover" style={{width:'100%'}} src="https://i.ibb.co/QHb0ymS/team3.jpg" alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Tips;