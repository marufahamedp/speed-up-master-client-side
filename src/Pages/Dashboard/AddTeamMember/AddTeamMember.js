import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useTeams from "../../../hook/useTeams";
import DisplayMember from "../DisplayMember/DisplayMember";
const AddTeamMember = () => {
    const { register, handleSubmit, reset } = useForm();
    const { teamMember} = useTeams();
    const onSubmit = data => {
        axios.post('https://intense-sands-94991.herokuapp.com/teammembers', data)
        .then(res => {
                alert('data inserted');
                reset()
        })
    };
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{textAlign:'center', fontWeight:600}} variant="h4">
                        ADD A NEW MEMBER
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Name"
                            variant="standard"
                            {...register("memberName")}
                            sx={{ width: 1, mb:2 }}
                        />
                        <TextField
                            label="Image URL"
                            variant="standard"
                            {...register("memberPhoto")}
                            sx={{ width: 1, mb:2 }}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="About Member"
                            multiline
                            rows={5}
                            {...register("memberDetails")}
                            sx={{ width: 1, mb:2 }}
                        />
                        <Box sx={{textAlign:'end'}}>
                        <Button type="submit" variant="contained">Add Member</Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography sx={{textAlign:'center', fontWeight:600}} variant="h4">
                        ALL NEW MEMBER
                    </Typography>
                {
                    teamMember.map(member=> <DisplayMember
                        key={member._id}
                        member={member}
                    ></DisplayMember>)
                }
                </Grid>

            </Grid>

        </div>
    );
};

export default AddTeamMember;