import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteTeammemberModal from '../DeleteTeammemberModal/DeleteTeammemberModal';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const DisplayMember = ({member}) => {

    const {memberName, memberPhoto, memberDetails, _id} = member;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    const [openalart, setOpenalart] = React.useState(false);


    const handleClosealart = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenalart(false);
    };

    const handelDelete = id => {
        const url = `https://intense-sands-94991.herokuapp.com/teammembers/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setOpenalart(true);
                    }
                })
    }
    return (
        <div>
            <Paper elevation={3} sx={{mb:2, display:'flex', alignItems:'center', justifyContent:'space-between'}} >
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <img style={{width:'100px'}} src={memberPhoto} alt="" />
                    <Typography variant="h5" sx={{ml:1}}>
                    {memberName}
                    </Typography>
                    
                </Box>
                <Box  sx={{display:'flex', justifyContent:'end'}}>
                    <Box><Button 
                     sx={{color:'red'}}
                     onClick={handleOpen}
                     > Delete <DeleteForeverIcon sx={{ml:1}} /></Button>
                    <DeleteTeammemberModal
                         _id={_id}
                         handleOpen={handleOpen}
                         handleClose={handleClose}
                         handelDelete={handelDelete}
                         open={open}
                    ></DeleteTeammemberModal>
                    
                    </Box>
                    </Box>
            </Paper>
            <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar  open={openalart} autoHideDuration={2000} onClose={handleClosealart}>
                       <Box>
                       <Alert onClose={handleClosealart} severity="success" sx={{ width: '100%', }}>
                            Successfully reviewed this site
                        </Alert>
                       </Box>
                    </Snackbar>
                </Stack>
        </div>
    );
};

export default DisplayMember;