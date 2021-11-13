import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useTeams from '../../../hook/useTeams';
import DisplayTeamMember from '../DisplayTeamMember/DisplayTeamMember';

const DisplayTeamMembers = () => {
    const { teamMember } = useTeams();
    return (
        <div>
           <Container>
               <Typography sx={{fontWeight:600, my:3, textAlign:'center'}} variant="h3">
               Meet our team
               </Typography>
           <Grid container spacing={2}>
                {
                    teamMember.map(team=> <DisplayTeamMember
                    key={team._id}
                    team={team}
                    ></DisplayTeamMember>)
                }
                
            </Grid>
           </Container>
        </div>
    );
};

export default DisplayTeamMembers;