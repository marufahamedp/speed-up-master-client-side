import React from 'react';
import MainHeader from '../../Shared/Header/MainHeader/MainHeader';
import DisplayTeamMembers from '../../About/DisplayTeamMembers/DisplayTeamMembers'
import Tips from '../../Home/Tips/Tips';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Footer from '../../Shared/Footer/Footer/Footer';
const About = () => {
    return (
        <div>
             <MainHeader></MainHeader>
            <Container>
           
            <Typography sx={{ my: 5, fontWeight: 600, textAlign: 'center' }} variant="h3">
                ABOUT US
            </Typography>
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                   <Box>
                   <Typography sx={{ my: 2, fontWeight: 600, textAlign: 'end' }} variant="h3">
               OUR STORY
            </Typography>
                <Typography sx={{ my: 2, textAlign: 'end' }} variant="body1">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum saepe provident facere iusto autem animi aperiam a quidem facilis? Distinctio modi hic ex quas ut, totam illum cum? Id?
            </Typography>
            <Box sx={{textAlign:'end'}}>
                            <Button variant="contained">Read More</Button>
                            </Box>
                   </Box>
               </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box className="imghoverBox">
            <img className="imghover" style={{width:'100%'}} src="https://i.ibb.co/FmSNrZz/as.jpg" alt="" />
            </Box>
               
                </Grid>
                
            </Grid>
            <Tips></Tips>
            <DisplayTeamMembers></DisplayTeamMembers>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default About;