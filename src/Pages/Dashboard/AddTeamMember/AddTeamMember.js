import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useTeams from "../../../hook/useTeams";
import DisplayMember from "../DisplayMember/DisplayMember";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AddTeamMember = () => {
    const [open, setOpen] = React.useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const { register, handleSubmit, reset } = useForm();
    const { teamMember} = useTeams();
    const onSubmit = data => {
        axios.post('https://intense-sands-94991.herokuapp.com/teammembers', data)
        .then(res => {
            setOpen(true);
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
                        <Button className="speedButton" type="submit" variant="contained">Add Member</Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography sx={{textAlign:'center', fontWeight:600, mb:4}} variant="h4">
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
            <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar  open={open} autoHideDuration={2000} onClose={handleClose}>
                       <Box>
                       <Alert onClose={handleClose} severity="success" sx={{ width: '100%', }}>
                            Successfully Team Member Added
                        </Alert>
                       </Box>
                    </Snackbar>
                </Stack>
        </div>
    );
};

export default AddTeamMember;