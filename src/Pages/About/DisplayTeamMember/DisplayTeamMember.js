import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DisplayTeamMember = ({team}) => {
    const {memberName, memberPhoto, memberDetails} = team;
    return (
        <Grid item xs={12} md={4}>
       <Box sx={{display:'flex', justifyContent:'center'}}>
           <Paper elevation={3} sx={{p:2, width: 400}}>
               <Box  sx={{display:'flex', justifyContent:'center'}}>
               <img style={{width:'100%'}} src={memberPhoto}/>
               </Box>
           <Typography variant="h6" sx={{textAlign:'center'}}>
           {memberName}
           </Typography>
           <Typography variant="body1" sx={{textAlign:'center'}}>
           {memberDetails}
           </Typography>
           </Paper>
      
       </Box>
    </Grid>
    );
};

export default DisplayTeamMember;