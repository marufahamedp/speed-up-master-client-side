import { Container, Grid } from '@mui/material';
import React from 'react';
import useTeams from '../../../hook/useTeams';
import DisplayTeamMember from '../DisplayTeamMember/DisplayTeamMember';

const DisplayTeamMembers = () => {
    const { teamMember } = useTeams();
    return (
        <div>
           <Container>
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