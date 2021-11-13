import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './DisplayTeamMember.css'
const DisplayTeamMember = ({team}) => {
    const {memberName, memberPhoto, memberDetails} = team;
    return (
        <Grid item xs={12} md={4}>
       <Box sx={{display:'flex', justifyContent:'center'}}>
           <Paper elevation={3} sx={{my:2}}>
               <Box  sx={{display:'flex', justifyContent:'center', overflow:'hidden', mb:1}}>
               <img className="imghover" style={{width:'100%'}} src={memberPhoto}/>
               </Box>
           <Typography sx={{my:1}} variant="h5" sx={{textAlign:'center'}}>
           {memberName}
           </Typography>
           <Box  sx={{my:1}}>
           <Typography  variant="h6" sx={{textAlign:'center'}}>
           {memberDetails}
           </Typography>
           </Box>
           </Paper>
      
       </Box>
    </Grid>
    );
};

export default DisplayTeamMember;