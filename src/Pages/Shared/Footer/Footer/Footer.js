import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FooterColumn1 from '../FooterColumn1/FooterColumn1';
import FooterColumn2 from '../FooterColumn2/FooterColumn2';
import FooterColumn3 from '../FooterColumn3/FooterColumn3';
import FooterColumn4 from '../FooterColumn4/FooterColumn4';

const Footer = () => {
    return (
        <Box sx={{mt:1, backgroundColor: 'black', color:'white'}} >
            <Container sx={{ py: 3}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <FooterColumn1></FooterColumn1>
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <FooterColumn2></FooterColumn2>
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <FooterColumn3></FooterColumn3>
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <FooterColumn4></FooterColumn4>
                    </Grid>
                </Grid>
            </Container>
            <Typography sx={{textAlign:'center', pb:1}}>
            © 2021 Speed Up || All Rights Reserved
            </Typography>
        </Box>
    );
};

export default Footer;